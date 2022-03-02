<script lang="ts" setup>
import { useMenu } from './composable/menu/index'

const { prefix, defaultActive, menu } = useMenu()
</script>

<template>
  <el-menu class="el-menu" :default-active="defaultActive" router>
    <el-menu-item
      v-for="(item, index) in menu"
      :key="index"
      :index="`${prefix}${item.path}`"
    >
      <component :is="item.icon"></component>
      <span class="label">{{ item.label }}</span>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped>
.label {
  margin-left: var(--g-gap-xs);
}
</style>
