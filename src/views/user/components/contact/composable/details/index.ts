import { ref } from 'vue'
import { api } from '@http'
import type { ApiResponse } from '@http'

export const useDetails = () => {
  const showDetails = ref(false)
  const info = ref<null | ApiResponse<'/user/contact/details'>>(null)
  const detailsLoading = ref(false)

  let prevArg: unknown = null
  const onCheckDetails = (data: unknown) => {
    showDetails.value = true

    if (data === prevArg) {
      return
    } else {
      api({
        flag: '/user/contact/details',
        data,
        loadingRef: detailsLoading
      }).then(res => {
        info.value = res
        prevArg = data
      })
    }
  }

  return {
    showDetails,
    info,
    detailsLoading,
    onCheckDetails
  }
}
