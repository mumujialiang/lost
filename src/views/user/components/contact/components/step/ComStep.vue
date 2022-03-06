<script lang="ts" setup>
import { AlarmClock, Upload, Phone } from '@element-plus/icons-vue'
import ComUpload from './components/upload/ComUpload.vue'
import ComWait from './components/wait/ComWait.vue'
import ComFinish from './components/finish/ComFinish.vue'

const props = defineProps<{
  modelValue: boolean
  loading: boolean
}>()

const emit = defineEmits<{
  (e: 'update:model-value', value: boolean): void
}>()

const getComponentName = () => {
  return ComUpload
}
</script>

<template>
  <el-dialog
    :model-value="props.modelValue"
    title="当前进度"
    width="800px"
    @update:model-value="emit('update:model-value', $event)"
  >
    <el-steps :space="200" :active="0" simple>
      <el-step title="上传备案资料" :icon="Upload"></el-step>
      <el-step title="等待人工审核" :icon="AlarmClock"></el-step>
      <el-step title="获得联系电话" :icon="Phone"></el-step>
    </el-steps>
    <div class="container">
      <component :is="getComponentName()"></component>
    </div>
  </el-dialog>
</template>

<style lang="scss" scoped></style>
