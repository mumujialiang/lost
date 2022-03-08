<script lang="ts" setup>
import { ref } from 'vue'
import SlideVerify from 'vue3-slide-verify'
import 'vue3-slide-verify/dist/style.css'
import img1 from './img/1.jpg'
import img2 from './img/1.jpg'
import img3 from './img/1.jpg'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const block: any = ref(null)
const msg = ref('')

const onSuccess = () => {
  msg.value = `通过验证`
}

const onFail = () => {
  msg.value = '验证不通过'
}

const onRefresh = () => {
  msg.value = ''
}

/** 刷新 */
const refresh = () => {
  block.value?.refresh()
  msg.value = ''
}

// FIXME: 没有执行随机图片，在node环境（例：vue-cli）打包前后可以正常执行
const imgs = [img1, img2, img3]

defineExpose({
  refresh
})
</script>

<template>
  <div>
    <SlideVerify
      ref="block"
      v-bind="$attrs"
      slider-text="向右滑动->"
      :imgs="imgs"
      @success="onSuccess"
      @fail="onFail"
      @refresh="onRefresh"
    ></SlideVerify>
    <div class="tips">
      {{ msg }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tips {
  height: 1.7em;
  margin-top: var(--g-gap-md);
}
</style>
