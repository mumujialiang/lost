<script lang="ts" setup>
import { useMap } from './composable/map/index'

const { mapElement, setCenter } = useMap()

defineExpose({
  setCenter
})
</script>

<template>
  <div ref="mapElement" class="map"></div>
</template>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>
