<template>
  <div>
    <button @click="$emit('go-chart')">Gå till betyg</button>
    <h2>Temperatur (nästa 24h)</h2>

    <ApexChart type="line" :options="chartOptions" :series="series" height="400" width="900" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const series = ref([])
const chartOptions = ref({
  chart: {
    id: 'temperature-chart',
  },
  xaxis: {
    categories: [],
  },
  yaxis: {
    title: {
      text: 'Temperatur (°C)',
    },
  },
  stroke: {
    curve: 'smooth',
  },
  markers: {
    size: 4,
  },
})

// Funktion för att hämta senaste 9 dagar
async function fetchWeather() {
  const today = new Date()
  const pastDate = new Date()
  pastDate.setDate(today.getDate() - 8) // 9 dagar totalt

  const start = pastDate.toISOString().split('T')[0] // yyyy-mm-dd
  const end = today.toISOString().split('T')[0]

  // Mariehamn: lat 60.097, lon 19.934
  const url = `https://api.open-meteo.com/v1/forecast?latitude=60.097&longitude=19.934&daily=temperature_2m_max,temperature_2m_min&timezone=Europe/Helsinki&start_date=${start}&end_date=${end}`

  const response = await fetch(url)
  const data = await response.json()

  // Sätt kategorier (datum) och serier (max/min)
  chartOptions.value.xaxis.categories = data.daily.time
  series.value = [
    {
      name: 'Max temperatur',
      data: data.daily.temperature_2m_max,
    },
    {
      name: 'Min temperatur',
      data: data.daily.temperature_2m_min,
    },
  ]
}

onMounted(() => {
  fetchWeather()
})
</script>
