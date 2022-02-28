import '@amap/amap-jsapi-types'
import type { UseShadeCover } from './types'

export const useShadeCover = ({ mapPromise, emit }: UseShadeCover) => {
  let map: AMap.Map | null = null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let AMap: any = null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let polygon: any = null
  mapPromise.then(res => {
    ;({ map, AMap } = res)

    // 实例化蒙层
    polygon = new AMap.Polygon({
      strokeColor: '#00eeff',
      strokeWeight: 1,
      fillColor: '#000000',
      fillOpacity: 0.4
    })
    map.add(polygon)

    map.on('moveend', () => {
      setShade()
    })
  })

  // 绘制遮罩
  const setShade = () => {
    if (map && AMap) {
      const { lat, lng } = map.getCenter()

      const radius = 0.005
      const toFixed = (number: number) => {
        return Number(number.toFixed(5))
      }
      const latStart = toFixed(lat - radius)
      const latEnd = toFixed(lat + radius)
      const lngStart = toFixed(lng - radius)
      const lngEnd = toFixed(lng + radius)

      const pathArray = [
        [
          new AMap.LngLat(-360, 90, true),
          new AMap.LngLat(-360, -90, true),
          new AMap.LngLat(360, -90, true),
          new AMap.LngLat(360, 90, true)
        ],
        [
          new AMap.LngLat(lngStart, latStart),
          new AMap.LngLat(lngStart, latEnd),
          new AMap.LngLat(lngEnd, latEnd),
          new AMap.LngLat(lngEnd, latStart)
        ]
      ]

      polygon.setPath(pathArray)

      emit('update:location', {
        lat: [latStart, latEnd],
        lng: [lngStart, lngEnd]
      })
    }
  }
}
