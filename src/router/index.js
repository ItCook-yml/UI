import { createRouter, createWebHistory } from 'vue-router'
import sys_1 from '@/views/sys_1.vue'
import login1 from '@/views/login/login1.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name:'sys_1',
      path:'/sys1',
      component:sys_1

    },
    {
      name:'login1',
      path:'/login1',
      component:login1

    },
  ]
})

export default router
