<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import ViewTwo from './components/ViewTwo.vue';
import ViewThree from './components/ViewThree.vue';
import ViewFour from './components/ViewFour.vue';
import ViewFive from './components/ViewFive.vue';
import ViewSix from './components/ViewSix.vue';
import InputOneView from './components/InputOneView.vue';
import InputTwoView from './components/InputTwoView.vue';
import InputThreeView from './components/InputThreeView.vue';
import CardOneView from './components/CardOneView.vue';
import CardTwoView from './components/CardTwoView.vue';
import CardThree from './components/CardThree.vue';
import CardFourView from './components/CardFourView.vue';
import CardFiveView from './components/CardFiveView.vue';
import CardSixView from './components/CardSixView.vue';
import CardSevenView from './components/CardSevenView.vue';
import CardEigthView from './components/CardEigthView.vue';
import LoginView from './components/LoginView.vue';
import BarraView from './components/BarraView.vue';
import MigaPan from './components/MigaPan.vue';

import { VueQueryDevtools } from '@tanstack/vue-query-devtools'

</script>

<template >
   
 
  <VueQueryDevtools />
  <RouterView />
</template>