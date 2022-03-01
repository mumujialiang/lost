<script lang="ts" setup>
import ComInfoWindow from './components/infoWindow/ComInfoWindow.vue'
import { useInitMap } from '@/common/composable/initMap/index'
import { usePointCover } from './composable/pointCover/index'
import { useImgCover } from './composable/imgCover/index'
import { useLoading } from './composable/loading/index'
import { useShadeCover } from './composable/shadeCover/index'
import { toRef } from 'vue'
import type { ApiResponse } from '@http'
import type { Emits, SetCenter } from './types'

const props = defineProps<{
  points: ApiResponse<'/index/queryMapPoints'>['points']
  activeId: string
  loading: boolean
}>()

const rawEmit = defineEmits([
  'update:active-id',
  'update:location',
  'change-disable-state',
  'look-details'
])
const emit: Emits = rawEmit

const { mapElement, mapPromise } = useInitMap()
const { pointElements } = usePointCover({
  mapPromise,
  points: toRef(props, 'points')
})
const { imgElements } = useImgCover({
  mapPromise,
  points: toRef(props, 'points')
})
const { loadingElement } = useLoading()
// XXX: 此处有可能不合理的使用方式，包括上面有关 mapPromise 的
useShadeCover({
  mapPromise,
  emit
})

const setCenter: SetCenter = ({ lat, lng }, callback = () => null) => {
  mapPromise
    .then(({ map }) => {
      map.setCenter([lng, lat])
      callback(true)
    })
    .catch(() => {
      callback(false)
    })
}

defineExpose({
  setCenter
})
</script>

<template>
  <div class="wrap">
    <div ref="mapElement" class="map"></div>
    <transition name="fade">
      <div v-show="props.loading" class="load-state">
        <div ref="loadingElement" class="inner"></div>
      </div>
    </transition>
    <div
      v-for="(item, index) in props.points"
      :key="item.id"
      style="display: none"
    >
      <div
        :ref="
          el =>
            (pointElements[index] = {
              el,
              id: item.id
            })
        "
        class="point"
        @click="emit('update:active-id', item.id)"
      >
        <div
          class="inner"
          @click="
            emit('change-disable-state', {
              id: item.id,
              disable: false
            })
          "
        ></div>
      </div>
      <div
        v-show="!item.disable"
        :ref="
          el =>
            (imgElements[index] = {
              el,
              id: item.id
            })
        "
        @click="emit('update:active-id', item.id)"
      >
        <ComInfoWindow
          :img="item.img"
          :img-size="1"
          :active="item.id === props.activeId"
          @look-details="emit('look-details', item.presetPayLoad.details)"
          @close="
            emit('change-disable-state', {
              id: item.id,
              disable: !item.disable
            })
          "
        />
      </div>
    </div>
    <div></div>
  </div>
</template>

<style lang="scss" scoped>
.wrap,
.map {
  width: 100%;
  height: 100%;
}

.load-state {
  position: absolute;
  top: 10px;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  pointer-events: none;
  .inner {
    flex-grow: 0;
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    transform: scale(3);
  }
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

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.fade-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
