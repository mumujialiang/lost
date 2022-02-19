<script lang="ts" setup>
import { ref } from 'vue'
import carbonWarning from '~icons/carbon/warning'
import { api } from '@http'
import ComMD from './test.md'

const loading = ref(false)

api({
  flag: '/index/a',
  showLoading: true,
  loadingRef: loading,
  responseText: true
}).then(res => {
  console.log(res as Global.ApiResponse<'/index/a'>)
})
</script>

<template>
  <div>new component</div>
  <carbon-warning />
  <ComMD />
  <el-button type="primary">Primary</el-button>
  {{ loading }}
</template>

<style lang="scss" scoped></style>
