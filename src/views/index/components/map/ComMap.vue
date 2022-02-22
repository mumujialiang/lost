<script lang="ts" setup>
import { useInitMap } from '@/common/composable/initMap/index'
import { usePointCover } from './composable/pointCover/index'
import { toRef } from 'vue'
import type { ApiResponse } from '@http'

const props = defineProps<{
  points: ApiResponse<'/index/queryMapPoints'>['points']
}>()

const { mapElement, mapPromise } = useInitMap()
const { pointElements } = usePointCover({
  mapPromise,
  points: toRef(props, 'points')
})
</script>

<template>
  <div class="wrap">
    <div ref="mapElement" class="map"></div>
    <div>
      <div
        v-for="(item, index) in props.points"
        :key="index"
        :ref="
          el =>
            (pointElements[index] = {
              el,
              id: item.id
            })
        "
        class="point"
      >
        <div class="inner" @click="item.disable = !item.disable"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap,
.map {
  width: 100%;
  height: 100%;
}

.point {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 0;
  height: 0;
  .inner {
    position: relative;
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    background-color: #fff;
    border: 4px solid red;
    border-radius: 50%;
    box-shadow: 0 0 6px rgba($color: #000000, $alpha: 0.5);
    transition: all var(--g-transition-duration);

    &:hover {
      transform: scale(1.3);
    }
  }
}
</style>
