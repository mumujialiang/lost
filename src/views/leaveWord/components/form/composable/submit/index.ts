import { ref } from 'vue'
import { showFormVerifyError } from '@/common/js/control/index'
import { api, type ApiRequest } from '@http'
import type { ElForm } from 'element-plus'

export const useSubmit = (form: ApiRequest<'/leaveWord/submit'>) => {
  const formElement = ref<InstanceType<typeof ElForm> | null>(null)
  const finishSubmit = ref(false)

  const onSubmit = () => {
    formElement.value
      ?.validate()
      ?.then(() => {
        api({
          flag: '/leaveWord/submit',
          data: form,
          showLoading: true,
          responseText: 'ζδΊ€ζε'
        }).then(() => {
          finishSubmit.value = true
        })
      })
      .catch(err => {
        showFormVerifyError(err)
      })
  }

  return {
    formElement,
    finishSubmit,
    onSubmit
  }
}
