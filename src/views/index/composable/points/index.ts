import { ref, type Ref } from 'vue'
import { useStorage } from '@vueuse/core'
import { api, type ApiResponse } from '@http'
import type { EmitDto } from '../../types'
import type { UsePointsArg } from './types'

export const usePoints = ({ date, location }: UsePointsArg) => {
  const points: Ref<ApiResponse<'/index/queryMapPoints'>['points']> = ref([])
  const disablePoints = useStorage<string[]>('disablePoints', [])
  const pointsLoading = ref(false)

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
    pointsLoading,
    changeDisableState
  }
}
