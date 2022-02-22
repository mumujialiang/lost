import { onMounted, ref } from 'vue'
import { loadMap } from '@/common/js/map/load'
import '@amap/amap-jsapi-types'
import type {
  CurrentPositionCallBack,
  SetCurrentPosition,
  MapPromise,
  CreatedMap,
  MapElement,
  CreatedSetCurrentPosition
} from './types'

const createdMap: CreatedMap = ({ AMap, mapElement }) => {
  const mapOption: Partial<AMap.MapOptions> = {
    zoom: 11, //初始化地图层级
    center: [116.397428, 39.90923] //初始化地图中心点
  }
  return new AMap.Map(mapElement.value, mapOption)
}

const createdSetCurrentPosition: CreatedSetCurrentPosition = ({
  map,
  geolocation
}) => {
  const setCurrentPosition: SetCurrentPosition = (cb = () => undefined) => {
    const currentPositionCallback: CurrentPositionCallBack = (
      status,
      result
    ) => {
      if (status == 'complete') {
        const { lat, lng } = result.position
        map.setCenter([lng, lat])
        cb({ lat, lng })
      } else {
        console.log(result)
      }
    }
    geolocation.getCurrentPosition(currentPositionCallback)
  }
  return setCurrentPosition
}

const loadMapPlugins = [
  'AMap.Scale',
  'AMap.Geocoder',
  'AMap.Scale',
  'AMap.MapType',
  'AMap.Geolocation',
  'AMap.MoveAnimation'
]

export const useInitMap = () => {
  const mapElement: MapElement = ref(null)

  const mapPromise: MapPromise = new Promise(resolve => {
    onMounted(() => {
      loadMap({
        plugins: loadMapPlugins
      }).then(AMap => {
        const map = createdMap({
          AMap,
          mapElement
        })

        // 浏览器定位
        const geolocation = new AMap.Geolocation({
          position: 'RB', //定位按钮的停靠位置
          zoomToAccuracy: true //定位成功后是否自动调整地图视野到定位点
        })

        const setCurrentPosition = createdSetCurrentPosition({
          map,
          geolocation
        })

        // 以下添加控件
        map.addControl(geolocation)
        map.addControl(new AMap.Scale())
        map.addControl(new AMap.MapType())

        resolve({
          AMap,
          map,
          setCurrentPosition
        })
      })
    })
  })

  return {
    mapElement,
    mapPromise
  }
}
