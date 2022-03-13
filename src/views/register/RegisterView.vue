<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElForm } from 'element-plus'
import ComMiniPage from '@/common/components/miniPage/ComMiniPage.vue'
import ComSlideVerify from '@/common/components/slideVerify/ComSlideVerify.vue'
import ComAgreement from './components/agreement/ComAgreement.md'
import { telPrefixOption } from '@/common/js/control'
import { useCountDown } from '@/common/composable/countDown'
import { rules } from './config'
import { api } from '@/http'

const form = reactive({
  name: '',
  password: '',
  tel: '',
  telPrefix: 86,
  code: '',
  accept: false
})

const TuringTestDialogVisible = ref(false)
const agreementDialogVisible = ref(false)
const formElement = ref<InstanceType<typeof ElForm> | null>(null)
const { countDownInit, countDown, countDownHandle } = useCountDown()

const getAuthCode = () => {
  formElement.value?.validateField('tel', message => {
    if (!message) {
      api({
        flag: '/register/authCode',
        showLoading: true,
        responseText: '验证码已发送'
      }).then(() => {
        countDownHandle()
      })
    }
  })
}
const onSubmit = () => {
  formElement.value?.validate()?.then(() => {
    TuringTestDialogVisible.value = true
  })
}

const onTuringTestSuccess = () => {
  api({
    flag: '/register/register',
    data: form,
    showLoading: true,
    responseText: '注册成功'
  })
    .then(() => {
      //
    })
    .finally(() => {
      TuringTestDialogVisible.value = false
    })
}
</script>

<template>
  <ComMiniPage>
    <div class="form-wrap">
      <el-form
        ref="formElement"
        :model="form"
        label-width="0"
        :rules="(rules as any)"
      >
        <el-form-item prop="name">
          <el-input v-model="form.name" placeholder="昵称"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            placeholder="密码"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item prop="tel">
          <el-input v-model.number="form.tel" placeholder="填写常用手机号">
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
                {{ String(countDown).padStart(2, '0') }}
                秒后重新获取
              </el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="accept">
          <div class="agreement-wrap">
            <el-checkbox v-model="form.accept" label="我已同意"></el-checkbox>
            <div class="agreement" @click="agreementDialogVisible = true">
              《用户使用协议》
            </div>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button class="register-btn" type="primary" @click="onSubmit">
            注册
          </el-button>
        </el-form-item>
      </el-form>
      <el-dialog
        v-model="TuringTestDialogVisible"
        title="验证"
        width="350px"
        :close-on-click-modal="false"
      >
        <ComSlideVerify
          ref="slideVerifyElement"
          @success="onTuringTestSuccess"
        />
      </el-dialog>

      <el-dialog
        v-model="agreementDialogVisible"
        title="用户使用协议"
        width="600px"
      >
        <div class="agreement-popup-inner">
          <ComAgreement />
        </div>
      </el-dialog>
    </div>
  </ComMiniPage>
</template>

<style lang="scss" scoped>
.form-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  .auth-code-btn {
    width: 10em;
  }
  .agreement-wrap {
    display: flex;
    align-items: center;
    .agreement {
      margin-left: var(--g-gap-lg);
      color: var(--g-color-primary);
      cursor: pointer;
      user-select: none;
    }
  }

  .register-btn {
    width: 100%;
  }
}

.agreement-popup-inner {
  max-height: 60vh;
  overflow: auto;
}
</style>
