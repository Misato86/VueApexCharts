<template>
  <div>
    <button @click="$emit('go-chart')">Gå till betyg</button>
    <h2>Temperatur (nästa 24h)</h2>

    <apexchart type="line" height="350" :options="chartOptions" :series="series" />
  </div>
</template>

<script setup></script>
