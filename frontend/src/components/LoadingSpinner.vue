<template>
  <div id="container">
    <svg viewBox="0 0 100 100">
      <defs>
        <filter id="shadow">
          <feDropShadow dx="0" dy="0" flood-color="var(--accent-main)"
                        stdDeviation="1.5"/>
        </filter>
        <linearGradient id="main-gradient">
          <stop offset="0%" stop-color="var(--accent-main)"/>
          <stop offset="100%" stop-color="var(--accent-second)"/>
        </linearGradient>
      </defs>

      <circle id="spinner"
              cx="50"
              cy="50" r="45"
              style="fill:transparent;stroke:url(#main-gradient);stroke-width: 7px;stroke-linecap: round;"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: "LoadingSpinner"
}
</script>

<style scoped>
svg {
  height: 100%;
}

@keyframes animation {
  0% {
    stroke-dasharray: 1 98;
    stroke-dashoffset: -105;
  }
  50% {
    stroke-dasharray: 80 10;
    stroke-dashoffset: -160;
  }
  100% {
    stroke-dasharray: 1 98;
    stroke-dashoffset: -300;
  }
}

#spinner {
  transform-origin: center;
  animation-name: animation;
  animation-duration: 1.2s;
  animation-timing-function: cubic-bezier;
  animation-iteration-count: infinite;
}
</style>
