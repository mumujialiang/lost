<script lang="ts" setup>
import { useInitMap } from '@/common/composable/initMap/index'

const { mapElement, mapPromise } = useInitMap()
</script>

<template>
  <div class="wrap">
    <div ref="mapElement" class="map"></div>
  </div>
</template>

<style lang="scss" scoped>
.wrap,
.map {
  width: 100%;
  height: 100%;
}
</style>
