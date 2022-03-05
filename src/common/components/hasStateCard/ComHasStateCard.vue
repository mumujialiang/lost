<script lang="ts" setup>
import carbonClose from '~icons/carbon/close'
import { ElMessageBox } from 'element-plus'
import { typeOption } from './config'
import type { MaskType } from './types'

const props = defineProps<{
  showClose?: boolean
  img: string
  mask?: {
    type: MaskType
    text?: string
  }
}>()

const emit = defineEmits<{
  (e: 'remove'): void
}>()

const removeItem = () => {
  ElMessageBox.alert(`确定要删除？`, '提示', {
    showCancelButton: true,
    callback: (action: 'confirm' | 'cancel' | 'close') => {
      if (action === 'confirm') {
        emit('remove')
      }
    }
  })
}
</script>

<template>
  <el-card class="el-card" :body-style="{ padding: '0px' }">
    <carbon-close
      v-if="props.showClose"
      class="close-icon"
      @click="removeItem()"
    />
    <div class="img-wrap">
      <el-image class="el-image" :src="props.img" fit="cover"></el-image>
      <div
        v-if="props.mask !== undefined"
        class="mask"
        :style="{
          color: typeOption[props.mask.type].color
        }"
      >
        <component
          :is="typeOption[props.mask.type].icon"
          class="icon"
        ></component>
        <div class="label">
          {{ props.mask.text }}
        </div>
      </div>
    </div>
    <div class="box">
      <slot></slot>
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
.el-card {
  position: relative;
  margin-top: var(--g-gap-lg);
  user-select: none;
  .close-icon {
    position: absolute;
    top: var(--g-gap-md);
    right: var(--g-gap-md);
    z-index: 1;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
    user-select: none;
    background-color: #00000050;
    transition: all 0.1s;
    &:hover {
      transform: scale(1.3);
    }
  }
  .img-wrap {
    position: relative;
    width: 100%;
    height: 200px;
    .el-image {
      width: 100%;
      height: 100%;
    }
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background-color: rgba($color: #000000, $alpha: 0.7);
      .icon {
        font-size: 40px;
      }
      .label {
        margin-top: var(--g-gap-md);
        font-size: var(--g-gap-lg);
        font-weight: bold;
      }
    }
  }
  .box {
    padding: var(--g-gap-lg);
  }
}
</style>
