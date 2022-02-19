import { AllApiHasPrefix } from '@/http/apiTypes/index'

declare global {
  export namespace Global {
    export type ApiResponse<T extends keyof AllApiHasPrefix> =
      AllApiHasPrefix[T]['response']
    export type ApiRequest<T extends keyof AllApiHasPrefix> =
      AllApiHasPrefix[T]['request']
  }
}
