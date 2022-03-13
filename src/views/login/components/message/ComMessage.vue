<script lang="ts" setup>
import { ElForm } from 'element-plus'
import { telPrefixOption } from '@/common/js/control'
import { rules } from './config'
import { useCountDown } from '@/common/composable/countDown'
import { useVerify } from './composable/verify'

const { countDownInit, countDown, countDownHandle } = useCountDown()
const { formElement, form, getAuthCode, verify } = useVerify(countDownHandle)

defineExpose({
  verify
})
</script>

<template>
  <el-form ref="formElement" :model="form" label-width="0" :rules="rules">
    <el-form-item prop="tel">
      <el-input v-model.number="form.tel" placeholder="你的手机号">
        <template #prepend>
          <el-select v-model.number="form.telPrefix" style="width: 110px">
            <el-option
              v-for="(item, index) in telPrefixOption"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="code">
      <el-input v-model.number="form.code" placeholder="请输入短信验证码">
        <template #append>
          <el-button
            v-if="countDownInit === countDown"
            class="auth-code-btn"
            @click="getAuthCode"
          >
            点击获取验证码
          </el-button>
          <el-button v-else class="auth-code-btn">
            {{ String(countDown).padStart(2, '0') }} 秒后重新获取
          </el-button>
        </template>
      </el-input>
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped>
.auth-code-btn {
  width: 10em;
}
</style>
