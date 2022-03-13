import type { RegisterMockApi } from '@/http/apiTypes/index'
import type { UrlMap } from '../types'

export const register: UrlMap<RegisterMockApi> = {
  register: {
    response() {
      return {}
    }
  },
  authCode: {
    response: () => {
      return {}
    }
  }
}
