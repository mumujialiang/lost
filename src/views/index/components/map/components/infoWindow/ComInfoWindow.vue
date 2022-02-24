<script lang="ts" setup>
import carbonClose from '~icons/carbon/close'

const props = defineProps<{
  img: string
  imgSize: number
  active: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <div
    class="info-window"
    :class="{
      active: props.active
    }"
  >
    <div class="box">
      <div class="inner">
        <el-image
          :src="props.img"
          :style="{
            width: `${props.imgSize * 150}px`,
            height: `${props.imgSize * 150}px`
          }"
          fit="cover"
        ></el-image>

        <div class="mask">
          <div class="check-btn">查看</div>
        </div>
      </div>
      <div class="close" @click="emit('close')">
        <carbon-close />
      </div>
      <div class="triangle-down"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info-window {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  width: 0;
  height: 0;
  user-select: none;
  background-color: red;
  opacity: 0.7;
  transition: transform 0.3s;
  animation-duration: 0.7s;
  &:hover {
    opacity: 1;
    transform: translateY(10px);
  }

  .box {
    position: absolute;
    bottom: 29px;
    left: -30px;
    padding: 5px;
    font-size: 0;
    background-color: #fff;
    filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.6));
    .inner {
      position: relative;
      &:hover .mask {
        opacity: 1;
      }

      .mask {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 99999;
        display: flex;
        width: 100%;
        font-size: var(--g-font-size-sm);
        color: #fff;
        user-select: none;
        opacity: 0;
        @mixin mask-mixin {
          display: flex;
          flex: 1;
          align-items: center;
          justify-content: center;
          padding: 5px 0;
          background-color: rgba($color: #000000, $alpha: 0.5);
          &:hover {
            background-color: rgba($color: #000000, $alpha: 0.8);
          }
        }
        .check-btn {
          @include mask-mixin;
        }
      }
    }
    .close {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 25px;
      color: #444;
      cursor: pointer;
      background-color: #fff;
      transition: transform 0.2s;
      &:hover {
        color: var(--g-color-primary);
        transform: scale(1.3);
      }
    }
    .triangle-down {
      position: absolute;
      bottom: -20px;
      left: 20px;
      width: 0;
      height: 0;
      border-top: 20px solid #fff;
      border-right: 10px solid transparent;
      border-left: 10px solid transparent;
    }
  }
}

.active {
  opacity: 1;
  transform: translateY(10px);
  .box,
  .close {
    color: #fff !important;
    background-color: var(--g-color-primary) !important;
  }
  .triangle-down {
    border-top-color: var(--g-color-primary) !important;
  }
}
</style>
