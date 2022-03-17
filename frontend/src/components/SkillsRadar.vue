<script>
import {Radar} from 'vue-chartjs'

export default {
  extends: Radar,
  mounted() {
    let ctx = document.createElement('canvas').getContext('2d');
    let gradient = ctx.createLinearGradient(0, 0, 220, 220);
    gradient.addColorStop(0, 'rgba(173, 0, 201, .8)');
    gradient.addColorStop(1, 'rgba(199, 0, 95, .8)');

    this.renderChart({
      labels: ['Design', 'DevOps', 'Python', 'Js', 'HTML/CSS', 'Vue', 'Node.JS'],
      datasets: [
        {
          backgroundColor: gradient,
          data: [40, 25, 80, 85, 90, 70, 60],
          comments: false,
        }
      ]
    }, {
      legend: {display: false},
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
          color: 'rgba(255, 255, 255, 0.2)'
        },
        angleLines: {
          color: 'white' // lines radiating from the center
        },
      },
      showLines: false,
    })
  }
}
</script>
