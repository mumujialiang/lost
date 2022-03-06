import type { MaskType } from '@/common/components/hasStateCard/types'

export interface Contact {
  list: {
    response: {
      list: {
        img: string
        state: string
        showClose: boolean
        mask?: {
          type: MaskType
          text: string
        }
        ajaxData: {
          remove: unknown
          view: unknown
          contact: unknown
        }
      }[]
    }
  }
  remove: {
    response: unknown
  }
  details: {
    response: {
      id: string
      applicationId: string
      img: string
      time: string
      description: string
      lat: number
      lng: number
    }
  }
}
