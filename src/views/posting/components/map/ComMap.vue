<script lang="ts" setup>
import { ref } from 'vue'
import carbonLocationFilled from '~icons/carbon/location-filled'
import { ElMessage } from 'element-plus'
import { useInitMap } from '@/common/composable/initMap/index'
import ComSearch from './components/search/ComSearch.vue'
import type { GetAddressCallBack, SetLocationEmitDto } from './types'

const addr = ref('')
const moving = ref(false)
const location = ref({
  lat: 0,
  lng: 0
})

const { mapElement, mapPromise } = useInitMap(['AMap.Geolocation'])

mapPromise.then(({ setCurrentPosition }) => {
  setCurrentPosition()
})

mapPromise.then(({ map, AMap }) => {
  map.on('movestart', () => {
    moving.value = true
  })
  map.on('moveend', () => {
    moving.value = false

    const { lat, lng } = map.getCenter()
    location.value = {
      lat,
      lng
    }
    const geocoder = new AMap.Geocoder()

    const getAddressCallBack: GetAddressCallBack = (status, result) => {
      if (status === 'complete' && result.regeocode) {
        const address = result.regeocode.formattedAddress
        addr.value = address
      } else {
        ElMessage.error({
          message: '根据经纬度查询地址失败',
          duration: 3000
        })
      }
    }

    geocoder.getAddress([lng, lat], getAddressCallBack)
  })
})

const setLocation = ({ lat, lng }: SetLocationEmitDto) => {
  mapPromise.then(({ map }) => {
    map.setCenter([lng, lat])
  })
}

defineExpose({
  location
})
</script>

<template>
  <div class="wrap">
    <el-form label-width="17em">
      <el-form-item
        class="el-form-item"
        label="拾获地址（使用下面的地图定位）:"
      >
        <ComSearch v-model="addr" @set-location="setLocation" />
      </el-form-item>
    </el-form>
    <div class="map-wrap">
      <div ref="mapElement" class="map"></div>
      <div
        class="center-point"
        :class="{
          active: moving
        }"
      >
        <div class="bottom"></div>
        <div class="marker-icon">
          <carbon-location-filled />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: var(--g-gap-lg);
  padding-bottom: 0;
  .el-form-item {
    margin-bottom: var(--g-gap-md);
  }
  .map-wrap {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    .map {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .center-point {
      position: relative;
      z-index: 10;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      height: 0;
      font-size: 25px;
      color: red;
      pointer-events: none;
      user-select: none;
      .bottom {
        position: absolute;
        bottom: 3px;
        width: 20px;
        height: 10px;
        background-color: rgba($color: #000000, $alpha: 0.6);
        border-radius: 50%;
        transition: all 0.5s;
      }
      .marker-icon {
        z-index: 1;
        transition: all 0.5s;
      }
    }
    .active {
      .bottom {
        bottom: -2px;
        width: 8px;
        height: 4px;
        background-color: #000;
      }
      .marker-icon {
        z-index: 1;
        transform: translateY(-15px);
      }
    }
  }
}
</style>
