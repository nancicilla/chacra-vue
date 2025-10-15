<template >
     <div 
       :class="['align-middle items-end justify-end  bg-black/20 backdrop-blur-sm border border-white/50 rounded-lg shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] p-4  text-white relative before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none pb-14', anchoModal === 'pequenia' ? 'max-w-sm' :'max-w-2xl']"
     
     v-if="show">
              <div class="relative z-10">
                <div class="flex items-start gap-3">
                 
                  <div class="flex-1 min-w-0">
                       <h3 class="text-xl font-semibold mb-3">
                        <slot name="titulo"></slot>
                       </h3>
                       
                        <slot name="cuerpo"></slot>

                      
                       <div class="pt-9 flex items-end justify-end">
                        <slot name="botones"></slot>
                     </div>
                    
                  </div>
                  <button @click="CloseModal" class="flex-shrink-0 text-white/70 hover:text-white transition-colors w-4 h-4   rounded-full hover:bg-white/30   ">
                    <icon-x></icon-x>

                  </button>
                </div>
              </div>
            </div>
</template>
<script lang="ts" setup>
import IconX from './icons/IconX.vue';
interface Prop{
  show:boolean,
  anchoModal:string
  
}
const prop =withDefaults( defineProps<Prop>(),{
  show:false,
  anchoModal:'pequenia'
  
})
const emit=defineEmits(['close'])
function CloseModal() {
  emit('close')
}
</script>