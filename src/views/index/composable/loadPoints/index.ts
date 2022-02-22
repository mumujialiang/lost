import { ref, type Ref } from 'vue'
import { api, type ApiResponse } from '@http'

export const useLoadPoint = () => {
  const points: Ref<ApiResponse<'/index/queryMapPoints'>['points']> = ref([])

  api({
    flag: '/index/queryMapPoints'
  }).then(res => {
    points.value = res.points
  })

  return {
    points
  }
}
