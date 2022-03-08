import { useStorage } from '@vueuse/core'

export const tel = useStorage<string>('login-tel', '')
export const telPrefix = useStorage<number>('login-telPrefix', 86)
