import { ref, type Ref } from 'vue'
import dayjs from 'dayjs'
import { api, type ApiResponse } from '@http'

export const useLoadPoint = () => {
  const points: Ref<ApiResponse<'/index/queryMapPoints'>['points']> = ref([])
  const addr = ref('')
  const date = ref(dayjs().format('YYYY-MM-DD'))

  api({
    flag: '/index/queryMapPoints'
  }).then(res => {
    points.value = res.points
  })

  return {
    points,
    addr,
    date
  }
}
