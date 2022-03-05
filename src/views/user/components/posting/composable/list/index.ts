import { ref } from 'vue'
import { api, type ApiResponse } from '@http'

export const useList = () => {
  const listLoading = ref(false)
  const list = ref<ApiResponse<'/user/posting/list'>['list'][number][]>([])

  api({
    flag: '/user/posting/list',
    loadingRef: listLoading
  }).then(res => {
    list.value = res.list
  })

  const removeItem = (ajaxData: unknown) => {
    api({
      flag: '/user/posting/remove',
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
