<script setup>
import { ref, computed } from 'vue'

const labels = ref(['Matte', 'Engelska', 'Fysik', 'Svenska', 'Kemi'])
const series = ref([6, 8, 8, 9, 6])

const options = ref({
  chart: { id: 'vuechart-example', type: 'radar' },
  xaxis: { categories: labels.value },
})

const newLabel = ref('')
const newValue = ref('')

function addPoint() {
  const label = (newLabel.value || '').toString().trim()
  const val = parseFloat(newValue.value)
  labels.value.push(label)
  series.value.push(val)
  newLabel.value = ''
  newValue.value = ''
}

function removePoint(idx) {
  labels.value.splice(idx, 1)
  series.value.splice(idx, 1)
}

// Ändra för radar: [{ name, data: [...] }]
const radarSeries = computed(() => [{ name: 'Data', data: series.value }])
</script>

<template>
  <div class="chart-view" style="display: flex; gap: 24px; align-items: flex-start">
    <div style="min-width: 320px; max-width: 500px">
      <button @click="$emit('go-weather')">Gå till väder</button>

      <h2>Mata in ditt betyg!</h2>

      <label
        >Ämne
        <input v-model="newLabel" />
      </label>
      <br />
      <label
        >Betyg
        <input v-model="newValue" />
      </label>

      <div style="margin-top: 8px">
        <button @click="addPoint">Lägg till betyg</button>
      </div>

      <h3 style="margin-top: 16px">Aktuella betyg</h3>
      <ul>
        <li
          v-for="(lab, i) in labels"
          :key="i"
          style="display: flex; gap: 8px; align-items: center"
        >
          <strong style="width: 120px">{{ lab }}</strong>
          <span>{{ series[i] }}</span>
          <button @click="removePoint(i)">Ta bort</button>
        </li>
      </ul>
    </div>

    <div>
      <apex-chart width="800" type="radar" :options="options" :series="radarSeries" />
    </div>
  </div>
</template>
