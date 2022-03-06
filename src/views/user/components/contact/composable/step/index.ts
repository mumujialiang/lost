import { ref } from 'vue'

export const useStep = () => {
  const showStep = ref(false)
  const stepLoading = ref(false)

  const onStepHandle = () => {
    showStep.value = true
  }

  return {
    showStep,
    stepLoading,
    onStepHandle
  }
}
