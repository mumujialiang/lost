<script lang="ts" setup>
import { Edit, User } from '@element-plus/icons-vue'
import ComHasStateCard from '@/common/components/hasStateCard/ComHasStateCard.vue'
import ComContact from './components/contact/ComContact.vue'
import { useList } from './composable/list/index'
import { useApplicant } from './composable/applicant/index'

const { list, listLoading, removeItem } = useList()
const { applicantList, applicantLoading, showApplicant, loadApplicant } =
  useApplicant()
</script>

<template>
  <div v-loading="listLoading" class="posting">
    <el-row :gutter="20">
      <el-col v-for="(item, index) in list" :key="index" :span="8">
        <ComHasStateCard
          :img="item.img"
          :mask="item.mask"
          show-close
          @remove="removeItem(item.ajaxData.remove)"
        >
          <div class="time">发布时间：{{ item.time }}</div>
          <div class="btn-group">
            <el-button :icon="Edit">编辑</el-button>
            <el-button
              :icon="User"
              :disabled="item.btnDisabled"
              :type="item.btnType"
              @click="loadApplicant(item.ajaxData.applicant)"
            >
              {{
                item.contact > 0 ? `有 ${item.contact} 人申请` : '暂无人联系'
              }}
            </el-button>
          </div>
        </ComHasStateCard>
      </el-col>
    </el-row>
    <ComContact
      v-model="showApplicant"
      :list="applicantList"
      :loading="applicantLoading"
    />
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
