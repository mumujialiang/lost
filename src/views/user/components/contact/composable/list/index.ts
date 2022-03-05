import { api, type ApiResponse } from '@http'
import { ref } from 'vue'

export const useList = () => {
  const listLoading = ref(false)
  const list = ref<ApiResponse<'/user/contact/list'>['list']>([])

  api({
    flag: '/user/contact/list',
    loadingRef: listLoading
  }).then(res => {
    list.value = res.list
  })

  return {
    list,
    listLoading
  }
}
