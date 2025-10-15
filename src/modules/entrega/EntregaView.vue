<template>
  <div class="drag-drop-demo dropzone" @dragover.prevent
      @dragenter="onDragEnter"
      @dragleave="onDragLeave"
      @drop="onDrop">
                <div
                  v-for="item in items"
                  :key="item.id"
                  class="draggable"
                  draggable="true"
                  @dragstart="onDragStart(item,'i')"
                >
                  {{ item.name }}
                </div>
                </div>

    <div
      class="dropzone"
      @dragover.prevent
      @dragenter="onDragEnter"
      @dragleave="onDragLeave"
      @drop="onDrop"
    >
      
      <div  class="drag-drop-demo dropzone">
        <p v-if="itemsDroped.length==0" class="text-white">Suelta aquí</p>
                      <div v-else
                    v-for="item in itemsDroped"
                    :key="item.id"
                    class="draggable"
                    draggable="true"
                    @dragstart="onDragStart(item,'d')"
                  >
                    {{ item.name }}
                  </div>
      </div>
      </div>
    
  
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  { id: 1, name: 'Elemento A' },
  { id: 2, name: 'Elemento B' },
  { id: 3, name: 'Elemento C' },
])
const itemsDroped= ref([])

const draggedItem = ref(null)
const origeContenedor= ref('')


const onDragStart = (item, contenedor) => {
  draggedItem.value = item
  console.log("en onDragStart ",{contenedor,origenContenedor: origeContenedor.value})
 origeContenedor.value=contenedor
   console.log("en onDragStart despues asignacion ",{contenedor,origenContenedor: origeContenedor.value})
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

  if(origeContenedor.value=='i'){
    console.log("por la izquierad", items.value.filter(elemento=>elemento.id!=draggedItem.value.id))
  itemsDroped.value.push(draggedItem.value)
  items.value= items.value.filter(elemento=>elemento.id!=draggedItem.value.id)

  
  }else{
    console.log("por la derecha")
      items.value.push(draggedItem.value)
itemsDroped.value= itemsDroped.value.filter(elemento=>elemento.id!=draggedItem.value.id)
  }
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
