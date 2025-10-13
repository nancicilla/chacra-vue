<template>
    
<div class="relative">
  <!-- Button to toggle the hidden class -->
  

  <!-- Sidebar -->
  <div
    id="sidebar"
    class="z-10 fixed top-0 left-0 h-screen w-64 transform -translate-x-[calc(100%+10px)] transition-transform duration-300 translate-x-0 flex-1 bg-black/20 backdrop-blur-sm border  rounded-lg shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] p-4 text-white relative before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 before:rounded-lg after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none">
  




    <div class="w-full rounded-lg  shadow-sm overflow-hidden   max-w-[280px] h-screen">
      <div class="w-[calc(100%-16px)] rounded m-2 mx-3 mb-0 mt-3 flex h-max items-center gap-2">
          
        <p class="font-sans antialiased  text-current font-semibold text-3xl">CHACRA</p>
         <span class="span" >              
                <img :src="logo" alt="Logo" class="w-16 h-16" />
            </span>   
      </div>
      <div class="w-full h-max rounded p-3">
       
        <ul class="flex flex-col gap-0.5 min-w-60 mt-3">
        
          <router-link :to="{name:'jornalero'}" class="sub-menu">
            <span class="span">
              <icon-jornalero></icon-jornalero> 
            </span>Jornalero         
          </router-link>
           <router-link :to="{name:'producto'}" class="sub-menu">
              <span class="span">              
             <icon-producto></icon-producto>
            </span>Producto         
          </router-link>
          <router-link :to="{name:'entrega'}" class="sub-menu">
             <span class="span">              
             <icon-entrega></icon-entrega>
            </span>Entrega         
          </router-link>
          <router-link :to="{name:'venta'}" class="sub-menu">
                 <span class="span">              
            <icon-venta></icon-venta>
            </span>Venta
          </router-link>
           <router-link :to="{name:'historial'}" class="sub-menu">
             <span class="span">              
            <icon-historial></icon-historial>
            </span>Historial
          </router-link>
         
          <hr class="-mx-3 my-3 border-stone-200" />
          <li class="flex items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent dark:hover:text-white dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70 text-red-500 hover:bg-red-500/10 hover:text-error focus:bg-error/10 focus:text-error">
            <span class="span">
              <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-[18px] w-[18px]"><path d="M12 12H19M19 12L16 15M19 12L16 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 6V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </span>Cerrar sesión</li>
        </ul>
      </div>
     
    </div>
  </div>
</div>


</template>
<style scoped>
.sub-menu{
  @apply flex  items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in   bg-transparent  text-slate-50   hover:bg-white/30 focus:bg-stone-400 focus:text-stone-800 dark:focus:text-white  
}
.span{
  @apply grid place-items-center shrink-0 me-2.5
}


</style>
<script lang="ts" setup>
import IconJornalero from './icons/IconJornalero.vue';
import IconProducto from './icons/IconProducto.vue';
import IconVenta from './icons/IconVenta.vue';
import IconHistorial from './icons/IconHistorial.vue';
import IconEntrega from './icons/IconEntrega.vue';
import logo from '../assets/logo.png'
</script>