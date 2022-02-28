<script lang="ts" setup>
import { ref } from 'vue'
import ComMap from './components/map/ComMap.vue'
import ComControl from './components/control/ComControl.vue'
import ComList from './components/list/ComList.vue'
import ComDetails from './components/details/ComDetails.vue'
import { usePoints } from './composable/points/index'
import { useDetails } from './composable/details/index'

const { points, addr, date, pointsLoading, changeDisableState } = usePoints()
const { details, detailsLoading, showDetails, loadDetails } = useDetails()

const activeId = ref('')
</script>

<template>
  <div class="page">
    <div class="map-wrap">
      <ComMap
        v-model:active-id="activeId"
        :loading="pointsLoading"
        :points="points"
        @change-disable-state="changeDisableState"
        @look-details="loadDetails"
      />
    </div>

    <div class="sidebar">
      <div class="control">
        <ComControl v-model:addr="addr" v-model:date="date" />
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
