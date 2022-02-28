import { ref, type Ref } from 'vue'
import { useStorage } from '@vueuse/core'
import dayjs from 'dayjs'
import { api, type ApiResponse } from '@http'
import type { EmitDto, Location } from '../../types'

export const usePoints = () => {
  const points: Ref<ApiResponse<'/index/queryMapPoints'>['points']> = ref([])
  const addr = ref('')
  const date = ref(dayjs().format('YYYY-MM-DD'))
  const disablePoints = useStorage<string[]>('disablePoints', [])
  const pointsLoading = ref(false)
  const initialLocation: Location = {
    lat: [0, 0],
    lng: [0, 0]
  }
  const location: Ref<Location> = ref(initialLocation)

  const changeDisableState = ({ id, disable }: EmitDto) => {
    const target = points.value.find(({ id: targetId }) => targetId === id)
    if (target) {
      target.disable = disable
      if (disable) {
        disablePoints.value = [...new Set([target.id, ...disablePoints.value])]
      } else {
        disablePoints.value = disablePoints.value.filter(id => id !== target.id)
      }
    }
  }

  api({
    flag: '/index/queryMapPoints',
    loadingRef: pointsLoading
  }).then(res => {
    points.value = res.points.map(item => {
      return {
        ...item,
        disable: disablePoints.value.includes(item.id)
      }
    })
  })

  return {
    points,
    addr,
    date,
    location,
    pointsLoading,
    changeDisableState
  }
}
