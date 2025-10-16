<template>
     
      <div  class="dropzone" @dragover.prevent
      @dragenter="onDragEnter"
      @dragleave="onDragLeave"
      @drop="onDrop"
   ><p v-if="items.length==0" class="text-2xl text-white ">{{ titulo }}</p>
              <p v-else
            v-for="item in items"
            :key="item.id"
            class="my-item elemento"
            draggable="true"
            @dragstart="onDragStart(item)"
          >
            {{ item.nombre }}
</p>
      </div>
</template>

<script setup lang="ts">
import type{ Producto } from '@/modules/producto/interface/Producto.interface';
import { ref } from 'vue'
interface Parametros{
  items:Array<Producto>,
origen:any,
titulo:string
}
const props = defineProps<Parametros>()

const emit = defineEmits(['actualizarelemento','actualizarlista']);

const draggedItem = ref(null)


const onDragStart = (item) => {
  draggedItem.value = item
  emit('actualizarelemento',draggedItem.value,props.origen)
}

const onDragEnter = (e) => {
  e.target.classList.add('over')
}

const onDragLeave = (e) => {
  e.target.classList.remove('over')
}

const onDrop = (e) => {
  e.target.classList.remove('over')
emit('actualizarlista')

}


</script>

<style scoped>


.draggable {
  background: transparent;
  color: white;
  padding: 2px 4px;
  cursor: grab;
  border-radius: 4px;
}

.dropzone {
 
  border: 2px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
   display: flex;
  flex-wrap: wrap;
  
  transition: background 0.3s;
}

.dropzone.over {
  background: #e0ffe0;
  border-color: #42b983;
}
.elemento{
   flex: 1 1 100px; /* flex-grow, flex-shrink, flex-basis */
  margin: 5px;
  padding: 2px;
  text-align: center;
}
</style>
