<script lang="ts" setup>
import dayjs from 'dayjs'
import { useSearch } from './composable/search/index'

const props = defineProps<{
  addr: string
  date: string
}>()

const emit = defineEmits<{
  (e: 'update:addr', addr: string): void
  (e: 'update:date', date: string): void
  (e: 'change-addr'): void
}>()

const { querySearch } = useSearch()

const disabledDate = (time: Date) => {
  return (
    time.getTime() > Date.now() ||
    time.getTime() < dayjs().subtract(2, 'year').unix() * 1000
  )
}
</script>

<template>
  <div class="form-wrap">
    <el-form label-width="5em">
      <el-form-item label="搜索区域">
        <el-autocomplete
          :model-value="props.addr"
          :fetch-suggestions="querySearch"
          :trigger-on-focus="false"
          placeholder="请输入"
          style="width: 100%"
          @update:model-value="emit('update:addr', $event)"
          @change="emit('change-addr')"
        />
      </el-form-item>
      <el-form-item label="丢失时间">
        <el-date-picker
          :model-value="props.date"
          type="date"
          placeholder="请选择"
          style="width: 100%"
          value-format="YYYY-MM-DD"
          :editable="false"
          :clearable="false"
          :disabled-date="disabledDate"
          @update:model-value="emit('update:date', $event)"
        ></el-date-picker>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.form-wrap {
  padding: 0 var(--g-gap-md);
  margin-top: 22px;
  overflow: hidden;
}
</style>
