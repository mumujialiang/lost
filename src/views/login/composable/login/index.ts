import { ref } from 'vue'
import { api } from '@/http'
import type ComSlideVerify from '@/common/components/slideVerify/ComSlideVerify.vue'
import type ComPassword from '../../components/password/ComPassword.vue'
import type ComMessage from '../../components/message/ComMessage.vue'
import { tel as localTel, telPrefix as localTelPrefix } from '../../config'

export const useLogin = () => {
  const passwordElement = ref<InstanceType<typeof ComPassword> | null>(null)
  const messageElement = ref<InstanceType<typeof ComMessage> | null>(null)
  const slideVerifyElement = ref<InstanceType<typeof ComSlideVerify> | null>(
    null
  )
  const verifyDialogVisible = ref(false)
  const type = ref(0)
  const onLogin = () => {
    if (type.value == 0) {
      passwordElement.value?.verify().then(() => {
        verifyDialogVisible.value = true
      })
    } else {
      messageElement.value?.verify().then(() => {
        verifyDialogVisible.value = true
      })
    }
  }

  const success = () => {
    verifyDialogVisible.value = false
    slideVerifyElement.value?.refresh()

    if (type.value == 0) {
      passwordElement.value?.verify().then(({ account, password }) => {
        api({
          flag: '/login/login',
          showLoading: true,
          data: {
            type: 'password',
            password: {
              account,
              password
            }
          },
          responseText: '登录成功'
        }).then(() => {
          localTel.value = account
        })
      })
    } else {
      messageElement.value?.verify().then(({ tel, telPrefix, code }) => {
        api({
          flag: '/login/login',
          showLoading: true,
          data: {
            type: 'message',
            message: {
              tel,
              telPrefix,
              code
            }
          },
          responseText: '登录成功'
        }).then(() => {
          localTel.value = tel
          localTelPrefix.value = telPrefix
        })
      })
    }
  }

  return {
    passwordElement,
    messageElement,
    slideVerifyElement,
    verifyDialogVisible,
    type,
    onLogin,
    success
  }
}
