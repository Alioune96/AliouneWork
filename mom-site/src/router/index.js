import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FirstHome from '@/views/FirstHome.vue'
import Reservation from '@/views/ReservationView.vue'
import StyleView from '@/views/StyleView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FirstHome
    },
    {
      path:'/reservation',
      name: 'Reservation',
      component: Reservation
    },

    {
      path: '/style',
      name: 'Hairstyles',
      component: StyleView
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
