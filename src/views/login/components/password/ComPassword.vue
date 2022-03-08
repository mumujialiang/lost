<script lang="ts" setup>
import { User, Key } from '@element-plus/icons-vue'
import { rules } from './config'
import { useVerify } from './composable/verify'

const { formElement, form, verify } = useVerify()

defineExpose({
  verify
})
</script>

<template>
  <el-form ref="formElement" :model="form" label-width="0" :rules="rules">
    <el-form-item prop="account">
      <el-input
        v-model.number="form.account"
        placeholder="你的手机号"
        :prefix-icon="User"
      />
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        v-model="form.password"
        placeholder="密码"
        type="password"
        :prefix-icon="Key"
      />
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped></style>
