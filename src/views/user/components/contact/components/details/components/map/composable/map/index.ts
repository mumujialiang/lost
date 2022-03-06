import { useInitMap } from '@/common/composable/initMap/index'
import '@amap/amap-jsapi-types'

export const useMap = () => {
  const { mapElement, mapPromise } = useInitMap()

  const setCenter = ({ lng, lat }: { lng: number; lat: number }) => {
    mapPromise.then(({ AMap, map }) => {
      map.clearMap()
      const markerOption: AMap.MarkerOptions = {
        icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
        position: [lng, lat],
        offset: new AMap.Pixel(-26, -50)
      }
      const marker: AMap.Marker = new AMap.Marker(markerOption)
      marker.setMap(map)
      map.setCenter([lng, lat])
    })
  }
  return {
    mapElement,
    setCenter
  }
}
