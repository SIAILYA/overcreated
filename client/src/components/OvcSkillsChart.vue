<template>
  <RadarChart :chartData="testData" :options="options"/>
</template>

<script lang="ts" setup>
import {RadarChart} from "vue-chart-3";
import {Chart, registerables} from "chart.js";
import {ref} from "vue";

Chart.register(...registerables);

const testData = {
  labels: ["HTML/CSS", "JS", "Python", "NodeJS", "DevOps", "Design", "Vue", "React"],
  datasets: [
    {
      displayName: false,
      data: [80, 85, 85, 60, 30, 45, 75, 45],
      backgroundColor: ['rgba(199,0,95, .7)'],
      comments: false,
    },
  ],
  ticks: {
    display: false
  }
};

const options = ref({
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false,
    }
  },
  scales: {
    r: {
      grid: {
        borderColor: "#929292",
        color: "#929292"
      },
      angleLines: {
        display: true,
        color: "#929292"
      },
      suggestedMin: 15,
      suggestedMax: 100,
      ticks: {
        display: false
      }
    },
  },
  scale: {
    ticks: {
      display: false
    }
  }
});
</script>

<style scoped>

</style>
