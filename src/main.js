import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

createApp(App).mount('#app')

import VueApexCharts from 'vue3-apexcharts'

const app = createApp(App)

app.component('apex-chart', VueApexCharts)

app.mount('#app')
