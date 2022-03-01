import type { Ref } from 'vue'
import type ComMap from '../../components/map/ComMap.vue'

export interface GetLocationCallBack {
  (
    status: string,
    result: {
      info: string
      geocodes: {
        location: {
          lat: number
          lng: number
        }
      }[]
    }
  ): void
}

export interface UseAddrArg {
  comMapRef: Ref<InstanceType<typeof ComMap> | null>
}
