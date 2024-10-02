import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import { createStore } from './store/store'

const app = createApp(App)

app.use(router)

app.mount('#app')

app.use(MotionPlugin)

let currentUser =JSON.parse(localStorage.getItem('user'))

const store = createStore(currentUser)

app.use(store)


