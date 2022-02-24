import { ref, watch, type Ref } from 'vue'
import type { ImgMarkListItem, UsePointCoverArg } from './types'

export const useImgCover = ({ mapPromise, points }: UsePointCoverArg) => {
  const imgElements: Ref<ImgMarkListItem[]> = ref([])

  mapPromise.then(res => {
    const { map, AMap, setCurrentPosition } = res
    setCurrentPosition(res => {
      console.log('当前经纬度：', res)
    })

    watch(
      points,
      () => {
        points.value.forEach(({ lng, lat, id }) => {
          const target = imgElements.value.find(({ id: elmentId }) => {
            return elmentId === id
          })

          const imgMarker = new AMap.Marker({
            position: new AMap.LngLat(lng, lat),
            content: target?.el,
            draggable: true,
            topWhenClick: true,
            zIndex: 103,
            zooms: [12, 20]
          })

          // 更新zIndex
          imgMarker.on('mouseover', () => {
            imgMarker.setTop(true)
          })
          imgMarker.on('dragend', () => {
            imgMarker.moveTo([lng, lat], {
              duration: 1000,
              autoRotation: false
            })
          })
          map.add(imgMarker)
        })
      },
      {
        flush: 'post',
        immediate: true
      }
    )
  })
  return {
    imgElements
  }
}
