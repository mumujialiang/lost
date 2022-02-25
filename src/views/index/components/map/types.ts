import type { EmitDto } from '../../types'

export type Emits = {
  (e: 'update:active-id', value: string): void
  (e: 'change-disable-state', value: EmitDto): void
}
