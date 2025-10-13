import { createRouter, createWebHistory } from 'vue-router'
import PrincipalLayout from '@/layouts/PrincipalLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'principal',
      component: PrincipalLayout,
      children:[
        {
      path: '/jornalero',
      name: 'jornalero',
      component: () => import('../modules/jornalero/JornaleroView.vue'),
    },
    
    {
      path: '/producto',
      name: 'producto',
      component: () => import('../modules/producto/ProductoView.vue'),
    } ,
     {
      path: '/entrega',
      name: 'entrega',
      component: () => import('../modules/entrega/EntregaView.vue'),
    } ,
    {
      path: '/venta',
      name: 'venta',
      component: () => import('../modules/venta/VentaView.vue'),
    },
    {
      path:'/historial',
      name:'historial',
      component:()=>import('../modules/venta/HistorialView.vue')
    }

      ]
    },
    
  ],
})

export default router
