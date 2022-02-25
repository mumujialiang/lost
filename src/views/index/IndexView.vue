<script lang="ts" setup>
import { ref } from 'vue'
import ComMap from './components/map/ComMap.vue'
import ComControl from './components/control/ComControl.vue'
import ComList from './components/list/ComList.vue'
import { useLoadPoint } from './composable/loadPoints/index'
import type { EmitDto } from './types'

const { points, addr, date } = useLoadPoint()

const activeId = ref('')
const changeDisableState = ({ id, disable }: EmitDto) => {
  const target = points.value.find(({ id: targetId }) => targetId === id)
  if (target) {
    target.disable = disable
  }
}
</script>

<template>
  <div class="page">
    <div class="map-wrap">
      <ComMap
        v-model:active-id="activeId"
        :points="points"
        @change-disable-state="changeDisableState"
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
        />
      </div>
    </div>
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
