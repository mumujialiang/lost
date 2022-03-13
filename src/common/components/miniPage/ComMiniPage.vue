<script lang="ts" setup>
import ComSidebar from './components/sidebar/ComSidebar.vue'
</script>

<template>
  <div class="page">
    <div class="left">
      <ComSidebar />
    </div>
    <div class="right">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/common/style/page';

.page {
  @include common-page;
  display: flex;
  .left {
    display: flex;
    flex: 3;
    align-items: center;
  }
  .right {
    display: flex;
    flex: 4;
    min-width: 450px;
  }
}
</style>
