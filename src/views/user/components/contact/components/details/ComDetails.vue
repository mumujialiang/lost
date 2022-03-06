<script lang="ts" setup>
import { ref, watch } from 'vue'
import ComMap from './components/map/ComMap.vue'
import { useAddr } from './composable/addr'
import type { ApiResponse } from '@http'

const props = defineProps<{
  modelValue: boolean
  loading: boolean
  info: null | ApiResponse<'/user/contact/details'>
}>()

const emit = defineEmits<{
  (e: 'update:model-value', value: boolean): void
}>()

const { addr, setAddr } = useAddr()

const mapElement = ref<InstanceType<typeof ComMap> | null>(null)

watch(
  () => props.info,
  () => {
    if (props.info && mapElement.value) {
      const { lat, lng } = props.info
      setAddr({ lng, lat })
      mapElement.value.setCenter({
        lat,
        lng
      })
    }
  },
  {
    flush: 'post'
  }
)
</script>

<template>
  <el-dialog
    :model-value="props.modelValue"
    title="失物详情"
    width="500px"
    @update:model-value="emit('update:model-value', $event)"
  >
    <div v-loading="props.loading" class="details">
      <div v-if="props.info != null" class="top">
        <el-image
          class="el-image"
          :src="props.info.img"
          :preview-src-list="[props.info.img]"
          fit="contain"
        ></el-image>
        <div class="info">
          <div class="row">失物编号：{{ props.info.id }}</div>
          <div class="row">申请编号：{{ props.info.applicationId }}</div>
          <div class="row">拾获日期：{{ props.info.time }}</div>
          <div class="row">失物描述：{{ props.info.description }}</div>
        </div>
      </div>
      <div class="position">
        <ComMap ref="mapElement" />
        <el-input class="addr" :model-value="addr" :title="addr" disabled />
      </div>
    </div>
  </el-dialog>
</template>

<style lang="scss" scoped>
.details {
  display: flex;
  flex-direction: column;
  .top {
    display: flex;
    height: 100%;
    .el-image {
      flex-shrink: 0;
      width: 140px;
      height: 140px;
      user-select: none;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      height: 100%;
      max-height: 200px;
      margin-left: var(--g-gap-lg);
      overflow: auto;
      .row {
        margin-bottom: var(--g-gap-sm);
      }
    }
  }

  .position {
    display: flex;
    flex-direction: column;
    height: 350px;
    margin-top: var(--g-gap-md);

    .addr {
      margin-top: var(--g-gap-sm);
    }
  }
}
</style>
