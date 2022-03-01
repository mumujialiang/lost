import { loadMap } from '@/common/js/map/load'
import { ref } from 'vue'
import type { GetLocationCallBack, UseAddrArg } from './types'

export const useAddr = ({ comMapRef }: UseAddrArg) => {
  const addr = ref('')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let geocoder: any = null
  loadMap({
    plugins: ['AMap.Geocoder']
  }).then(AMap => {
    geocoder = new AMap.Geocoder()
  })

  const changeAddr = () => {
    const callback: GetLocationCallBack = (status, result) => {
      if (status === 'complete' && result.geocodes.length > 0) {
        const { lat, lng } = result.geocodes[0].location
        comMapRef.value?.setCenter({ lat, lng })
      } else {
        console.error('根据地址查询位置失败')
      }
    }
    geocoder?.getLocation(addr.value, callback)
  }

  return {
    addr,
    changeAddr
  }
}
