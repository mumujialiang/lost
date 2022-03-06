<script lang="ts" setup></script>

<template>
  <div class="text">
    <p class="tel">失物信息发布者联系电话：<strong>132XXXXXXXX</strong></p>
    <p class="tips">
      请确保自身安全，有条件的情况下协同朋友在当地公安局接收物品。
    </p>
    <p class="tips">本平台仅作为信息发布，无收取任何费用。</p>
  </div>
</template>

<style lang="scss" scoped>
.text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150px;
  .tel {
    font-size: 20px;
  }
  .tips {
    color: red;
  }
}
</style>
