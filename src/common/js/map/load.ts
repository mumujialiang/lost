import { load } from '@amap/amap-jsapi-loader'
import type { SetOptional } from 'type-fest'
import '@amap/amap-jsapi-types'

Object.assign(window, {
  _AMapSecurityConfig: {
    securityJsCode: 'ff84842d823a8a2a9595ee186f651871'
  }
})

interface LoadOption {
  key: string // 申请好的Web端开发者Key，首次调用 load 时必填
  version: string // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
  plugins?: string[] //插件列表
  // 是否加载 AMapUI，缺省不加载
  AMapUI?: {
    version?: string // AMapUI 缺省 1.1
    plugins?: string[] // 需要加载的 AMapUI ui插件
  }
  // 是否加载 Loca， 缺省不加载
  Loca?: {
    version?: string // Loca 版本，缺省 1.3.2
  }
}

export const loadMap = (option: SetOptional<LoadOption, 'key' | 'version'>) => {
  return load(
    Object.assign(
      {
        key: 'ed84622a88c8d5483b47112f221b1858', // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0' // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      },
      option
    ) as LoadOption
  )
}
