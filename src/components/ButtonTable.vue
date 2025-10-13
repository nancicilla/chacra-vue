<template>
     <button  @click="enviarDato" :title="titulo" class="items-center  justify-center border align-middle select-none font-sans font-medium text-center p-2 text-white text-sm font-medium rounded-lg bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased">
        <slot name="cuerpo"></slot>
              
              </button>
</template>
<script lang="ts" setup>
 interface Props{
  
    titulo:string,
    modelo:any
}
const props= defineProps<Props>()
const emit = defineEmits(['onsendinformation']);
function enviarDato() {
emit('onsendinformation', props.modelo);
}
/*const emit = defineEmits<{
  (e: 'sort', key: string): void
  (e: 'row-click', row: Record<string, any>): void
}>()*/
</script>