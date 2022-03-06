<script lang="ts" setup>
import { View, Phone } from '@element-plus/icons-vue'
import ComHasStateCard from '@/common/components/hasStateCard/ComHasStateCard.vue'
import ComDetails from './components/details/ComDetails.vue'
import ComStep from './components/step/ComStep.vue'
import { useList } from './composable/list'
import { useDetails } from './composable/details'
import { useStep } from './composable/step'

const { list, listLoading, removeItem } = useList()
const { showDetails, info, detailsLoading, onCheckDetails } = useDetails()
const { showStep, stepLoading, onStepHandle } = useStep()
</script>

<template>
  <div v-loading="listLoading" class="posting">
    <el-row :gutter="20">
      <el-col v-for="(item, index) in list" :key="index" :span="8">
        <ComHasStateCard
          :img="item.img"
          :show-close="item.showClose"
          :mask="item.mask"
          @remove="removeItem(item.ajaxData.remove)"
        >
          <div class="time">当前状态：{{ item.state }}</div>
          <div class="btn-group">
            <el-button
              class="el-button"
              :icon="View"
              @click="onCheckDetails(item.ajaxData.view)"
            >
              查看
            </el-button>
            <el-button
              class="el-button"
              :icon="Phone"
              type="primary"
              @click="onStepHandle"
            >
              获取联系电话
            </el-button>
          </div>
        </ComHasStateCard>
      </el-col>
    </el-row>
    <ComDetails v-model="showDetails" :loading="detailsLoading" :info="info" />
    <ComStep v-model="showStep" :loading="stepLoading" />
  </div>
</template>

<style lang="scss" scoped>
.posting {
  width: 100%;
  height: 100%;
  padding: 0 var(--g-gap-lg);
  overflow: auto;
  .time {
    text-align: center;
  }
  .btn-group {
    display: flex;
    justify-content: space-between;
    margin-top: var(--g-gap-md);
  }
}
</style>
