import type { UserPostingMockApi } from '@/http/apiTypes/index'
import type { UrlMap } from '../../types'

export const posting: UrlMap<UserPostingMockApi> = {
  list: {
    response: () => {
      const common = {
        img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        time: '2020-12-13',
        ajaxData: {
          remove: {},
          applicant: {}
        }
      }
      return {
        list: [
          {
            ...common,
            contact: 0,
            btnDisabled: true,
            btnType: 'primary',
            mask: {
              type: 'success',
              text: '已有失主联系'
            }
          },
          {
            ...common,
            contact: 1,
            btnDisabled: false,
            btnType: 'primary'
          },
          {
            ...common,
            contact: 2,
            btnDisabled: false,
            btnType: 'warning',
            mask: {
              type: 'danger',
              text: '可能有冒领情况'
            }
          },
          {
            ...common,
            contact: 3,
            btnDisabled: false,
            btnType: 'warning',
            mask: {
              type: 'stop',
              text: '暂停公示'
            }
          }
        ]
      }
    }
  },
  applicant: {
    response: () => {
      const list = Array(8)
        .fill({})
        .map(() => ({
          id: '123',
          applicationId: '321',
          img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          name: '林嘉亮',
          tel: '13232323232',
          time: '2020-16-12',
          ajaData: {
            report: {
              example: 123
            }
          }
        }))
      return {
        list
      }
    }
  },
  remove: {
    response: () => {
      return {
        example: 123
      }
    }
  },
  report: {
    response: () => {
      return {
        example: 123
      }
    }
  }
}
