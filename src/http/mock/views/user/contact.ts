import type { ContactMockApi } from '@/http/apiTypes/index'
import type { UrlMap } from '../../types'

export const contact: UrlMap<ContactMockApi> = {
  list: {
    response: () => {
      const common = {
        img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        ajaxData: {
          remove: {
            example: 123
          },
          view: {
            example: 123
          },
          contact: {
            example: 123
          }
        }
      }
      return {
        list: [
          {
            ...common,
            state: '已通过审核',
            showClose: false,
            mask: {
              type: 'success',
              text: '已通过审核'
            }
          },
          {
            ...common,
            state: '该失物无需备案',
            showClose: true
          },
          {
            ...common,
            state: '审核未通过',
            showClose: true,
            mask: {
              type: 'stop',
              text: '审核未通过'
            }
          },
          {
            ...common,
            state: '已被系统拒绝',
            showClose: true,
            mask: {
              type: 'stop',
              text: '已被系统拒绝'
            }
          }
        ]
      }
    }
  },
  remove: {
    response: () => {
      return {
        example: 123
      }
    }
  }
}
