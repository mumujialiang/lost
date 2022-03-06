import { ref } from 'vue'
import { loadMap } from '@/common/js/map/load'
import { ElMessage } from 'element-plus'

interface GetAddressCallBack {
  (
    status: string,
    result: {
      info: string
      regeocode: {
        addressComponent: Record<string, unknown>
        crosses: unknown[]
        formattedAddress: string
        pois: unknown[]
        roads: unknown[]
      }
    }
  ): void
}

export const useAddr = () => {
  const addr = ref('')

  interface Location {
    lat: number
    lng: number
  }
  let prevArg: null | Location = null
  const setAddr = (location: Location) => {
    if (prevArg === location) {
      return
    } else {
      addr.value = ''
      const { lng, lat } = location
      loadMap({}).then(AMap => {
        const geocoder = new AMap.Geocoder()

        const getAddressCallBack: GetAddressCallBack = (status, result) => {
          if (status === 'complete' && result.regeocode) {
            const address = result.regeocode.formattedAddress
            addr.value = address

            prevArg = location
          } else {
            ElMessage.error({
              message: '根据经纬度查询地址失败',
              duration: 3000
            })
          }
        }

        geocoder.getAddress([lng, lat], getAddressCallBack)
      })
    }
  }

  return {
    addr,
    setAddr
  }
}
