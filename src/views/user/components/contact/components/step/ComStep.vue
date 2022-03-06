<script lang="ts" setup>
const props = defineProps<{
  modelValue: boolean
  loading: boolean
}>()

const emit = defineEmits<{
  (e: 'update:model-value', value: boolean): void
}>()
</script>

<template>
  <el-dialog
    :model-value="props.modelValue"
    title="当前进度"
    width="800px"
    @update:model-value="emit('update:model-value', $event)"
  ></el-dialog>
</template>

<style lang="scss" scoped></style>
