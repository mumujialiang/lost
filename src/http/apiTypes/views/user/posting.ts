import type { ButtonType } from 'element-plus'
import type { MaskType } from '@/common/components/hasStateCard/types'

export interface Posting {
  list: {
    response: {
      list: {
        img: string
        time: string
        contact: number
        mask?: {
          type: MaskType
          text: string
        }
        btnDisabled: boolean
        btnType: ButtonType
        ajaxData: {
          remove: unknown
          applicant: unknown
        }
      }[]
    }
  }
  applicant: {
    response: {
      list: {
        id: string
        applicationId: string
        img: string
        name: string
        tel: string
        time: string
        ajaData: {
          report: unknown
        }
      }[]
    }
  }
  remove: {
    response: unknown
  }
  report: {
    response: unknown
  }
}
