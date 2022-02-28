import { ref, type Ref } from 'vue'
import { api, type ApiResponse } from '@http'

export const useDetails = () => {
  const details: Ref<ApiResponse<'/index/queryDetails'> | null> = ref(null)
  const detailsLoading = ref(false)
  const showDetails = ref(false)

  const loadDetails = (data: unknown = {}) => {
    showDetails.value = true
    api({
      flag: '/index/queryDetails',
      data,
      loadingRef: detailsLoading
    }).then(res => {
      details.value = res
    })
  }

  return {
    details,
    detailsLoading,
    showDetails,
    loadDetails
  }
}
