import type { ApiResponse } from '@http'
import type { EmitDto } from '../../types'

export type Emits = {
  (e: 'update:active-id', value: string): void
  (e: 'change-disable-state', value: EmitDto): void
  (
    e: 'look-details',
    value: ApiResponse<'/index/queryMapPoints'>['points'][number]['presetPayLoad']['details']
  ): void
}
