import { createRouter, createWebHistory } from 'vue-router'

// Importera vyer
import HomeView from '@/views/ChartView.vue'
import WeatherView from '@/views/WeatherView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/weather',
    name: 'weather',
    component: WeatherView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
