import { reactive, ref } from 'vue'
import { ElForm, ElMessage } from 'element-plus'
import { formInit } from './config'
import { api } from '@/http'

export const useVerify = (countDownHandle: () => void) => {
  const formElement = ref<InstanceType<typeof ElForm> | null>(null)
  const form = reactive(formInit)

  const verify: () => Promise<typeof form> = () => {
    return new Promise((resolve, reject) => {
      if (formElement.value) {
        formElement.value
          ?.validate()
          ?.then(() => {
            resolve(form)
          })
          .catch(err => {
            reject(err)
          })
      } else {
        reject('')
      }
    })
  }

  const getAuthCode = () => {
    if (formElement.value) {
      formElement.value.validateField('tel', message => {
        if (message) {
          ElMessage.error({
            message,
            duration: 6000,
            showClose: true
          })
        } else {
          api({
            flag: '/login/authCode',
            showLoading: true,
            responseText: '验证码已发送'
          }).then(() => {
            countDownHandle()
          })
        }
      })
    }
  }

  return {
    formElement,
    form,
    getAuthCode,
    verify
  }
}
