import type { IndexMockApi } from '@/http/apiTypes/index'
import type { UrlMap } from '../types'

export const index: UrlMap<IndexMockApi> = {
  a: {
    response: () => {
      return {
        a: '123'
      }
    }
  },
  b: {
    statusCode: 500,
    response() {
      return {
        statusCode: 500,
        message: 'Internal server error'
      }
    }
  }
}
