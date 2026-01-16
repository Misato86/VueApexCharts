<script setup>
import { ref } from 'vue'

// Options for a donut chart — add labels if using a donut
const options = ref({
  chart: { id: 'vuechart-example' },
  labels: ['A', 'B', 'C', 'D', 'E']
})

// Donut expects an array of numbers
const series = ref([44, 55, 41, 17, 15])
</script>

<template>
  <div>
    <apex-chart width="500" type="donut" :options="options" :series="series" />
  </div>
</template>

