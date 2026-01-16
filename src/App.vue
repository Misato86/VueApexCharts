<script setup>
import { ref } from 'vue'
import ChartView from './views/ChartView.vue'
import WeatherView from './views/WeatherView.vue'

const currentView = ref('chart')
</script>

<template>
  <div id="diagram">
    <ChartView v-if="currentView === 'chart'" @go-weather="currentView = 'weather'" />

    <WeatherView v-else @go-chart="currentView = 'chart'" />
  </div>
</template>
