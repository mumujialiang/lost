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

  const removeItem = (ajaxData: unknown) => {
    api({
      flag: '/user/contact/remove',
      data: ajaxData,
      showLoading: true,
      responseText: '删除成功'
    })
  }

  return {
    list,
    listLoading,
    removeItem
  }
}
