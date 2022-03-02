<script lang="ts" setup>
import { ref } from 'vue'
import ComForm from './components/form/ComForm.vue'
import ComMap from './components/map/ComMap.vue'
import ComTips from './components/tips/ComTips.md'
import { api } from '@http'

const dialogVisible = ref(false)
const finishSubmit = ref(false)
const formElement = ref<InstanceType<typeof ComForm> | null>(null)
const mapElement = ref<InstanceType<typeof ComMap> | null>(null)

const submit = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  formElement.value?.getFormData().then(({ accept, ...other }) => {
    if (mapElement.value) {
      const { location } = mapElement.value
      api({
        flag: '/posting/submit',
        data: {
          ...other,
          location
        },
        showLoading: true,
        responseText: '发布信息成功'
      })
        .then(() => {
          finishSubmit.value = true
        })
        .finally(() => {
          dialogVisible.value = false
        })
    }
  })
}

const validate = () => {
  formElement.value
    ?.getFormData()
    .then(() => {
      dialogVisible.value = true
    })
    .catch(err => err)
}
</script>

<template>
  <div class="page">
    <div class="main">
      <div class="left">
        <ComForm ref="formElement" />
      </div>
      <div class="right">
        <ComMap ref="mapElement" @set-location="location = $event" />
      </div>
    </div>
    <div class="submit-btn">
      <el-button
        class="el-button"
        type="primary"
        :disabled="finishSubmit"
        @click="validate()"
      >
        {{ finishSubmit ? '已发布信息' : '发布信息' }}
      </el-button>
    </div>
    <el-dialog
      v-model="dialogVisible"
      title="提示"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <ComTips />
      <template #footer>
        <el-button type="primary" @click="submit()"> 我已知晓 </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
@import '@/common/style/page';

.page {
  @include common-page;
  display: flex;
  flex-direction: column;
  user-select: none;

  .main {
    display: flex;
    flex: 1;
    overflow: hidden;
    .left {
      width: 500px;
      padding: var(--g-gap-lg);
      overflow-y: auto;
      border-right: var(--g-border);
    }
    .right {
      display: flex;
      flex: 1;
    }
  }
}

.submit-btn {
  padding: var(--g-gap-md);
  .el-button {
    width: 100%;
  }
}
</style>
