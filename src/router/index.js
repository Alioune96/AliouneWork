import { createRouter, createWebHistory } from 'vue-router'
import FirstHome from '@/views/FirstHome.vue'
import Reservation from '@/views/ReservationView.vue'
import StyleView from '@/views/StyleView.vue'
import IndividualPageView from '@/views/individualPageView.vue'
import LogIn from '@/components/LogIn.vue'
import SignView from '@/views/SignView.vue'
import CustomerView from '@/views/CustomerView.vue'
import ReviewView from '@/views/ReviewView.vue'
import GalleryView from '@/views/GalleryView.vue'
import { useStore } from 'vuex'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    {
      path: '/',
      name: 'Home',
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
    },

    {
      path: '/hairstyle/:id',
      name: 'Style',
      component: IndividualPageView,
    },

    {
      path: '/LogIn',
      name: 'Login',
      component: LogIn
    }, 
    {
      path: '/SignUp',
      name: 'Sign Up',
      component: SignView
    },
    {
      path: '/User/:id',
      name: 'User',
      component: CustomerView
    },
    {
      path: '/Reviews',
      name: 'Review',
      component: ReviewView
    },
    {
      path: '/Gallery',
      name: 'Gallery',
      component: GalleryView
      
    }
   
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
},
)

export default router
