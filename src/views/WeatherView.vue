<script setup>
import { ref, reactive, onMounted } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

const loading = ref(true)
const error = ref(null)

const dates = ref([])
const maxTemps = ref([])
const minTemps = ref([])

// ApexCharts options
const chartOptions = reactive({
  chart: {
    id: 'linechart',
    zoom: { enabled: false },
  },

  colors: ['#FF0000', '#0066CC'],
  stroke: {
    width: 3,
    curve: 'smooth',
  },
  markers: { size: 5 },
  xaxis: { categories: [], title: { text: 'Datum' } },
  yaxis: { title: { text: 'Temperatur (°C)' } },
  legend: { position: 'bottom' },
  tooltip: { shared: true, intersect: false },
})

// ApexCharts series
const series = reactive([
  { name: 'Max temperatur (°C)', data: [] },
  { name: 'Min temperatur (°C)', data: [] },
])

// Fetch Open-Meteo data
onMounted(async () => {
  try {
    const today = new Date()
    const endDate = today.toISOString().split('T')[0]

    const pastDate = new Date()
    pastDate.setDate(today.getDate() - 9)
    const startDate = pastDate.toISOString().split('T')[0]

    const url = `https://api.open-meteo.com/v1/forecast?latitude=60.0973&longitude=19.9348&daily=temperature_2m_max,temperature_2m_min&timezone=Europe/Helsinki&start_date=${startDate}&end_date=${endDate}`

    const response = await fetch(url)
    const data = await response.json()

    // Läs ut data
    dates.value = data.daily.time
    maxTemps.value = data.daily.temperature_2m_max
    minTemps.value = data.daily.temperature_2m_min

    // Uppdatera chart
    series[0].data = maxTemps.value
    series[1].data = minTemps.value
    chartOptions.xaxis.categories = dates.value
  } catch (err) {
    console.error(err)
    error.value = 'Kunde inte hämta väderdata'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="wather-vy">
    <button @click="$emit('go-chart')">Gå till betyg</button>
    <h2>Temperatur senaste 10 dagarna i Mariehamn</h2>

    <p v-if="loading">Laddar väderdata...</p>
    <p v-if="error">{{ error }}</p>

    <VueApexCharts
      v-if="!loading && !error"
      type="line"
      height="400"
      width="800"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<style scoped>
.weather-vy h1 {
  text-align: center;
  margin-bottom: 1rem;
}

.weather-vy p {
  text-align: center;
  margin-top: 1rem;
  font-weight: 500;
}
</style>
