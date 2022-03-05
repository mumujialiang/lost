<script lang="ts" setup>
import { View, Phone } from '@element-plus/icons-vue'
import ComHasStateCard from '@/common/components/hasStateCard/ComHasStateCard.vue'
import { useList } from './composable/list'

const { list, listLoading } = useList()
</script>

<template>
  <div v-loading="listLoading" class="posting">
    <el-row :gutter="20">
      <el-col v-for="(item, index) in list" :key="index" :span="8">
        <ComHasStateCard
          :img="item.img"
          :show-close="item.showClose"
          :mask="item.mask"
        >
          <div class="time">当前状态：{{ item.state }}</div>
          <div class="btn-group">
            <el-button class="el-button" :icon="View">查看</el-button>
            <el-button class="el-button" :icon="Phone" type="primary">
              获取联系电话
            </el-button>
          </div>
        </ComHasStateCard>
      </el-col>
    </el-row>
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
