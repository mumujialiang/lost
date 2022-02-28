<script lang="ts" setup>
import { RouterView } from 'vue-router'

import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
</script>

<template>
  <el-config-provider :locale="zhCn" size="large">
    <RouterView />
  </el-config-provider>
</template>

<style lang="scss" scoped></style>
