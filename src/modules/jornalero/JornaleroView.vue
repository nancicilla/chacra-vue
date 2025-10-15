<template>
  <h1 class="text-3xl text-slate-50 text-center p-16 font-semibold">JORNALERO</h1>
  <button @click="show = true" v-if="!show">
    <div class="flex items-center gap-3">
      <div
        class="w-10 h-10 hover:bg-white/30 bg-white/20 rounded-lg flex items-center justify-center border border-white/30">
        <icon-plus></icon-plus>
      </div>
    </div>

  </button>


  <div class="py-5">
    <MyModal :show="show" ancho-modal="pequenia" @close="show = false">
      <template #titulo>
          <template v-if="modeEdit">
          Editar Jornalero
        </template>
        <template v-else>
          Registra Jornalero
        </template>
      </template>
      <template #cuerpo>
        <input v-model="nombre" type="text" placeholder="Nombre del Jornalero" class="my-input" />
      </template>
      <template #botones>
        <button @click="guardarInformacion"
          class="inline-flex items-end justify-end border align-top select-none font-sans font-medium text-center px-4 py-2 text-white text-sm font-medium rounded-lg verde border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased">Guardar</button>
        <button @click="show=false"
          class="inline-flex items-end justify-end border align-top select-none font-sans font-medium text-center p-4 py-2 text-white text-sm font-medium rounded-lg rojo border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased">Cancelar</button>

      </template>
    </MyModal>
  </div>



  <TablaView :items="items" :columns="columns" @sort="onSort" @row-click="onRowClick" v-if="!cargando">
    <!-- slot header personalizado -->
    <template #header="{ column }">
      <div class="flex items-center justify-between">
        <span class="text-sm font-semibold">{{ column.label }}</span>
      </div>
    </template>
    <template #cell="{ row, col }">
      <div v-if="col.key === 'id'" class="flex px-3">
        <button-table titulo="Editar Jornalero" @onsendinformation="EditarInformacion" :modelo="row">
          <template #cuerpo>
            <icon-edit></icon-edit>
          </template>
        </button-table>
        <ButtonTable titulo="Eliminar Jornalero" @onsendinformation="EliminarInformacion" :modelo="row">
          <template #cuerpo>

            <icon-trash></icon-trash>
          </template>
        </ButtonTable>

      </div>
      <div v-else>{{ row[col.key] }}</div>
    </template>


    <template #empty>
      <div class="text-gray-500">No hay Registro de Jornaleros aún.</div>
    </template>
  </TablaView>
  <div v-else>
    <h1 class="text-white"> Cargando Informacion</h1>
  </div>

</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { createUpdateJornalero } from './actions/create-update-jornalero.action';
import { getJornaleros } from './actions/list-jornalero.action';
import { deleteJornalero } from './actions/delete-jornalero.action';
import type { Jornalero } from './interface/Jornalero.interface';
import MyModal from '@/components/MyModal.vue';
import TablaView from '@/components/TablaView.vue';
import ButtonTable from '@/components/ButtonTable.vue';
import IconTrash from '@/components/icons/IconTrash.vue';
import IconEdit from '@/components/icons/IconEdit.vue';
import IconPlus from '@/components/icons/IconPlus.vue';
const show = ref(false);
const modeEdit = ref(false)
const nombre = ref('')
const cargando= ref(true)
const id = ref('')
const items:Jornalero[] = ref([]);
const columns: Column<Jornalero>[] = [
  { key: 'nombrecompleto', label: 'Nombre Completo' ,align: 'text-left'},
  { key: 'id', label: 'Acciones', align: 'text-left' }
]


onMounted(async() => {
try {
    // Simular una llamada a la API para obtener los datos
    const respuesta = await getJornaleros();
    cargando.value = true;
    items.value = respuesta;
    console.log(items)

  } catch (error) {
    console.error('Error al obtener los Jornalero:', error);
  } finally {
    // Finalizar el estado de carga
   cargando.value = false;
  }
   
});
const guardarInformacion = async () => {
  if (modeEdit.value == false) {
    if (nombre.value != '') {
      const jornalero: Partial<Jornalero> = { nombrecompleto: nombre.value }
      await createUpdateJornalero(jornalero)
    }
  } else {
    const jornalero: Partial<Jornalero> = { nombrecompleto: nombre.value, id: id.value }
    await createUpdateJornalero(jornalero)
    items.value= await getJornaleros()
    modeEdit.value = false
  }
  nombre.value = ''
  show.value = false


}
function onSort(key: string) { console.log('ordenar por', key) }
function onRowClick(row: Jornalero) { console.log('fila', row) }
const EditarInformacion = (modelo: any) => {
  modeEdit.value = true
  id.value = modelo.id
  nombre.value = modelo.nombrecompleto
  show.value = true
}
const EliminarInformacion = async(modelo: any) => {
let result = confirm(`Desea por eliminar al Jornalero ${modelo.nombrecompleto}?`);
if(result){
 await deleteJornalero(modelo.id)
 items.value= await getJornaleros()
}
}

</script>
