import { ref } from 'vue'
import type { ElForm } from 'element-plus'
import { showFormVerifyError } from '@/common/js/control'
import type { Emits, Form } from '../../types'

export const useUpload = ({ emit }: { emit: Emits }) => {
  const form = ref<Form>({
    name: '',
    sex: '男',
    img: '',
    accept: false
  })
  const formElement = ref<InstanceType<typeof ElForm> | null>(null)

  const onSubmit = () => {
    if (formElement.value) {
      formElement.value
        .validate()
        ?.then(() => {
          console.log(form.value)
          emit('submit', form.value)
        })
        .catch(err => {
          showFormVerifyError(err)
        })
    }
  }

  return {
    form,
    formElement,
    onSubmit
  }
}
