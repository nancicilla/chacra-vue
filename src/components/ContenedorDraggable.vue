<template>
     
      <div  class="drag-drop-demo dropzone"
   ><p v-if="items.length==0" class="text-white">Suelta aquí</p>
              <div v-else
            v-for="item in items"
            :key="item.id"
            class="draggable"
            draggable="true"
            @dragstart="onDragStart(item,'d')"
          >
            {{ item.nombre }}
          </div>
      </div>
</template>

<script setup>
import type{ Producto } from '@/modules/producto/interface/Producto.interface';
import { ref } from 'vue'
const props = defineProps<{
    items:Array<Producto>
origen:any
}>()

const emit = defineEmits(['onUpdateList']);
const itemsDroped= ref([])

const draggedItem = ref(null)
//const origeContenedor= ref('')


const onDragStart = (item, contenedor) => {
  draggedItem.value = item
 origeContenedor.value=contenedor
  console.log('Inicio de arrastre:', item.name)
}

const onDragEnter = (e) => {
  e.target.classList.add('over')
}

const onDragLeave = (e) => {
  e.target.classList.remove('over')
}

const onDrop = (e) => {
    console.log("antes de terminar de soltar",{items,itemsDroped})
  e.target.classList.remove('over')
onUpdateList
emit('onUpdateList',draggedItem,origen)
    console.log("despues de terminar de soltar",{items,itemsDroped})


}

</script>

<style scoped>
.drag-drop-demo {
  display: flex;
  gap: 2rem;
}

.draggable {
  background: #42b983;
  color: white;
  padding: 8px 12px;
  cursor: grab;
  border-radius: 4px;
}

.dropzone {
  width: 200px;
  height: 150px;
  border: 2px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}

.dropzone.over {
  background: #e0ffe0;
  border-color: #42b983;
}
</style>
)