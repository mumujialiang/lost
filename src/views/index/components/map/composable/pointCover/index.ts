import { ref, watch, type Ref } from 'vue'
import type { PointMarkListItem, UsePointCoverArg } from './types'

export const usePointCover = ({ mapPromise, points }: UsePointCoverArg) => {
  const pointElements: Ref<PointMarkListItem[]> = ref([])

  mapPromise.then(res => {
    const { map, AMap, setCurrentPosition } = res
    setCurrentPosition(res => {
      console.log('当前经纬度：', res)
    })

    watch(
      points,
      () => {
        points.value.forEach(({ lng, lat, id }) => {
          const pointElement = pointElements.value.find(({ id: elmentId }) => {
            return elmentId === id
          })
          const pointMark = new AMap.Marker({
            position: new AMap.LngLat(lng, lat),
            content: pointElement?.el,
            topWhenClick: true,
            zIndex: 999
          })
          map.add(pointMark)
        })
      },
      {
        flush: 'post',
        immediate: true
      }
    )
  })
  return {
    pointElements
  }
}
