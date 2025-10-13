<template>



<div class="flex left-0 flex-row items-[50px]   h-screen  w-screen min-h-[100px] bg-cover bg-center bg-no-repeat rounded-md" :style="`background-image: url(${fondo})`">
               
  <div class="basis-1/6 h-screen " ><BarraView></BarraView></div>
  <div class="basis-5/6 " >
  <RouterView />
  </div>
</div>


</template>
<script lang="ts" setup>
import BarraView from '../components/BarraView.vue';
import fondo from '../assets/images/fondo.avif'

</script>