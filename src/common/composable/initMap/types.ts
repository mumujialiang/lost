import type { Ref } from 'vue'
import '@amap/amap-jsapi-types'

export interface CreatedMap {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (arg: { AMap: any; mapElement: MapElement }): AMap.Map
}

export type MapElement = Ref<HTMLElement | null>

export interface SetCurrentPosition {
  (callback?: (location: { lat: number; lng: number }) => void): void
}

export type MapPromise = Promise<{
  map: AMap.Map
  setCurrentPosition: SetCurrentPosition
}>

export interface CreatedSetCurrentPosition {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (arg: { map: AMap.Map; geolocation: any }): SetCurrentPosition
}

export interface CurrentPositionCallBack {
  (
    status: string,
    result: {
      [keyName: string]: unknown
      position: {
        lat: number
        lng: number
      }
    }
  ): void
}
