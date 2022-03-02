import type { LeaveWordMockApi } from '@/http/apiTypes/index'
import type { UrlMap } from '../types'

export const leaveWord: UrlMap<LeaveWordMockApi> = {
  submit: {
    response: () => {
      return {}
    }
  }
}
