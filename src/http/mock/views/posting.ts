import type { PostingMockApi } from '@/http/apiTypes/index'
import type { UrlMap } from '../types'

export const posting: UrlMap<PostingMockApi> = {
  submit: {
    response: () => {
      return {}
    }
  }
}
