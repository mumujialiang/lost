import type { LoginMockApi } from '@/http/apiTypes/index'
import type { UrlMap } from '../types'

export const login: UrlMap<LoginMockApi> = {
  login: {
    response: () => {
      return {}
    }
  },
  authCode: {
    response: () => {
      return {}
    }
  }
}
