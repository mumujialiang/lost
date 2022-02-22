import type { IndexMockApi } from '@/http/apiTypes/index'
import type { UrlMap } from '../types'

export const index: UrlMap<IndexMockApi> = {
  queryMapPoints: {
    response: () => {
      return {
        points: Array(8)
          .fill({})
          .map((_, index) => {
            // 测试时使用控制台打印的 "当前经纬度" 替换以下经纬度更方便
            return {
              lng: 113.39397 + index * 0.0005,
              lat: 23.15205 - index * 0.0005,
              img: 'https://tse1-mm.cn.bing.net/th/id/R-C.14b4b74e379683bd23230006fe98567d?rik=R1GP9ELf5%2ftOEg&riu=http%3a%2f%2fimg.keaitupian.cn%2fuploads%2f2020%2f10%2f15%2f69b37a9935dd4c9e8e2ba7d1990d5a53.jpg&ehk=nEx9koLXtYAN%2bQJr4SLVQ7LJNdfKzrS1%2fxsna%2bjnJf8%3d&risl=&pid=ImgRaw&r=0',
              id: String(index + 1),
              description: `描述${index + 1}`,
              disable: false
            }
          })
      }
    }
  },
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
