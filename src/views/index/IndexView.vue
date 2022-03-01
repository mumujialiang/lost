<script lang="ts" setup>
import { ref, type Ref } from 'vue'
import dayjs from 'dayjs'
import { initialLocation } from './config'
import ComMap from './components/map/ComMap.vue'
import ComControl from './components/control/ComControl.vue'
import ComList from './components/list/ComList.vue'
import ComDetails from './components/details/ComDetails.vue'
import { usePoints } from './composable/points/index'
import { useDetails } from './composable/details/index'
import { useAddr } from './composable/addr/index'
import type { Location } from './types'

const activeId = ref('')
const date = ref(dayjs().format('YYYY-MM-DD'))
const location: Ref<Location> = ref(initialLocation)
const comMapRef = ref<InstanceType<typeof ComMap> | null>(null)
const { addr, changeAddr } = useAddr({
  comMapRef
})
const { points, pointsLoading, changeDisableState } = usePoints({
  date,
  location
})
const { details, detailsLoading, showDetails, loadDetails } = useDetails()
</script>

<template>
  <div class="page">
    <div class="map-wrap">
      <ComMap
        ref="comMapRef"
        v-model:active-id="activeId"
        v-model:location="location"
        :loading="pointsLoading"
        :points="points"
        @change-disable-state="changeDisableState"
        @look-details="loadDetails"
      />
    </div>

    <div class="sidebar">
      <div class="control">
        <ComControl
          v-model:addr="addr"
          v-model:date="date"
          @change-addr="changeAddr"
        />
      </div>
      <div class="list">
        <ComList
          v-model:active-id="activeId"
          :points="points"
          @change-disable-state="changeDisableState"
          @look-details="loadDetails"
        />
      </div>
    </div>
    <ComDetails
      v-model="showDetails"
      :loading="detailsLoading"
      :details="details || undefined"
    />
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  overflow: hidden;
  .map-wrap {
    position: relative;
    flex: 1;
    overflow: hidden;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    width: 450px;
    height: 100%;
    overflow: hidden;

    .control {
      overflow: hidden;
    }
    .list {
      flex: 1;
      overflow: hidden;
    }
  }
}
</style>
