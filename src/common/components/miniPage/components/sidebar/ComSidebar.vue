<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import lottie from 'lottie-web'
import animationData from './lottieBackground.json'

const backgroundElement = ref(null)
onMounted(() => {
  if (backgroundElement.value !== null) {
    lottie.loadAnimation({
      container: backgroundElement.value,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData
    })
  }
})
</script>

<template>
  <div class="lottie-wrap">
    <div ref="backgroundElement" class="lottie"></div>
  </div>
</template>

<style lang="scss" scoped></style>
