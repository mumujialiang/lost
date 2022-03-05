<script lang="ts" setup>
import type { ApiResponse } from '@http'

const props = defineProps<{
  list: ApiResponse<'/user/posting/applicant'>['list']
  loading: boolean
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:model-value', value: boolean): void
  (e: 'report', value: unknown): void
}>()
</script>

<template>
  <el-dialog
    :model-value="props.modelValue"
    title="失主申请登记"
    width="550px"
    @update:model-value="emit('update:model-value', $event)"
  >
    <div v-loading="props.loading" class="list">
      <div v-for="(item, index) in props.list" :key="index" class="item">
        <div class="left">
          <el-image
            class="el-image"
            :src="item.img"
            :preview-src-list="[item.img]"
            fit="contain"
          ></el-image>
        </div>
        <div class="right">
          <div class="text-group">
            <p>姓名：{{ item.name }}</p>
            <p>电话：{{ item.tel }}</p>
            <p>申请时间：{{ item.time }}</p>
            <p>失物编号：{{ item.applicationId }}</p>
            <p>申请编号：{{ item.id }}</p>
          </div>
          <div class="btn-group">
            <el-button
              type="danger"
              @click="emit('report', item.ajaData.report)"
            >
              举报他/她
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  min-height: 230px;
  max-height: 60vh;
  overflow: auto;
  .item {
    display: flex;
    flex-shrink: 0;
    height: 230px;
    margin-top: var(--g-gap-lg);
    overflow: hidden;
    &:first-of-type {
      margin-top: 0;
    }
    .left {
      user-select: none;
      .el-image {
        width: 230px;
        height: 230px;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0 var(--g-gap-lg);
    }
  }
}
</style>
