import type { Component } from 'vue'

export type MaskType = 'success' | 'warning' | 'danger' | 'stop'

export type TypeOpton = Record<
  MaskType,
  {
    icon: Component
    color: string
  }
>
