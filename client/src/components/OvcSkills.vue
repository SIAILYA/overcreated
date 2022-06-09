<template>
  <RadarChart v-bind="radarChartProps"/>
</template>

<script setup lang="ts">
import {useRadarChart, RadarChart} from "vue-chart-3";
import {Chart, ChartData, ChartOptions, registerables} from "chart.js";
import {computed, ref} from "vue/dist/vue";

Chart.register(...registerables);

const dataValues = ref([85, 90, 60, 30, 40]);
const dataLabels = ref(["Frontend", "Python", "NodeJS", "DevOps", "Design"]);

const testData = computed < ChartData < "radar" >> (() => ({
  labels: dataLabels.value,
  datasets: [
    {
      data: dataValues.value,
    },
  ],
}));

const options = computed < ChartOptions < "radar" >> (() => ({
  plugins: {
    legend: {display: false},
    title: {display: false},
    scale: {
      ticks: {
        suggestedMin: 15,
        suggestedMax: 100,
        display: false,
      },
      pointLabels: {
        fontColor: 'white' // labels around the edge like 'Running'
      },
      gridLines: {
        color: 'rgba(155, 155, 155, 0.2)'
      },
      angleLines: {
        color: 'white' // lines radiating from the center
      },
    },
  },
  datasets: {
    radar: {}
  }
}));

const {radarChartProps, radarChartRef} = useRadarChart({
  chartData: testData,
  options,
});

</script>

<style scoped>

</style>
