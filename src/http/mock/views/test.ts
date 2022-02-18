import type { TestMockApi } from '@/http/apiTypes/index'
import type { UrlMap } from '../types'

export const test: UrlMap<TestMockApi> = {
  c: {
    response() {
      return {
        a: '123'
      }
    }
  },
  d: {
    response: () => null
  }
}
