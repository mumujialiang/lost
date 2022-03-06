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
  },
  details: {
    response: () => {
      return {
        id: String(Math.floor(Math.random() * 10)),
        applicationId: '321',
        img: 'https://tse1-mm.cn.bing.net/th/id/R-C.14b4b74e379683bd23230006fe98567d?rik=R1GP9ELf5%2ftOEg&riu=http%3a%2f%2fimg.keaitupian.cn%2fuploads%2f2020%2f10%2f15%2f69b37a9935dd4c9e8e2ba7d1990d5a53.jpg&ehk=nEx9koLXtYAN%2bQJr4SLVQ7LJNdfKzrS1%2fxsna%2bjnJf8%3d&risl=&pid=ImgRaw&r=0',
        time: '2022-03-06',
        description: '123',
        lat: 23.19272,
        lng: 113.40036
      }
    }
  }
}
