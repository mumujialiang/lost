import { reactive, ref } from 'vue'
import { tel } from '../../../../config'
import type { ElForm } from 'element-plus'

export const useVerify = () => {
  const formElement = ref<InstanceType<typeof ElForm> | null>(null)

  const form = reactive({
    account: tel.value,
    password: ''
  })

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

  return {
    formElement,
    form,
    verify
  }
}
