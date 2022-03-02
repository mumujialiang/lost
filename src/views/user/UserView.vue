<script lang="ts" setup>
import ComMenu from './components/menu/ComMenu.vue'
</script>

<template>
  <div class="page">
    <div class="left">
      <ComMenu />
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/common/style/page';

.page {
  @include common-page;
  display: flex;
  overflow: hidden;
  .left {
    width: 200px;
    height: 100%;
  }
  .right {
    flex: 1;
    overflow: hidden;
  }
}
</style>
