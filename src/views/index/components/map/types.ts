import type { EmitDto } from '../../types'

export type Emits = {
  (e: 'update:active-id', value: string): void
  (e: 'change-show-info-window', value: EmitDto): void
}
