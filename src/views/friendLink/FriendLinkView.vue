<script lang="ts" setup>
const tableData = [
  {
    name: '寻物启事网',
    link: 'https://www.xunwuqishi.com'
  },
  {
    name: '丢哪了',
    link: 'https://www.diunal.com'
  }
]
</script>

<template>
  <div class="page">
    <el-table :data="tableData" stripe style="width: 100%" height="100%">
      <el-table-column prop="name" label="网站名称" />
      <el-table-column prop="link" label="网站链接">
        <template #default="{ row }">
          <el-link type="primary" :href="row.link" target="_blank">
            {{ row.link }}
          </el-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style lang="scss" scoped>
@import '@/common/style/page';

.page {
  @include common-page;
  padding: var(--g-gap-md);
}
</style>
