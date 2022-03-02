<script lang="ts" setup>
const link = 'https://github.com/'
</script>

<template>
  <div class="page">
    <div class="text">
      此网站为开源项目，欢迎点个star，
      <el-link type="primary" :href="link" target="_blank">
        {{ link }}
      </el-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/common/style/page';

.page {
  @include common-page;
  padding: var(--g-gap-md);

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
}
</style>
