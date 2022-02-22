import type { ApiResponse } from '@http'
import type { MapPromise } from '@/common/composable/initMap/types'
import type { Component, Ref } from 'vue'

export interface PointMarkListItem {
  el: Element | null | Component
  id: string
}

export type UsePointCoverArg = {
  mapPromise: MapPromise
  points: Ref<ApiResponse<'/index/queryMapPoints'>['points']>
}
