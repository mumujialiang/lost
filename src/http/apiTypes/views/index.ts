/*
  TODO: 增加类似类型 extends Record<string,{
    request: unknown
    response: unknown
  }>
*/
// 推荐使用使用query create update remove ，区分批量可使用复数，真实接口标识根据实际调整

export interface Index {
  queryMapPoints: {
    request: {
      date: string
      location: {
        lat: [number, number]
        lng: [number, number]
      }
    }
    response: {
      points: {
        lng: number
        lat: number
        img: string
        id: string
        description: string
        disable: boolean
        presetPayLoad: {
          details: unknown
        }
      }[]
    }
  }
  queryDetails: {
    response: {
      id: string
      img: string
      time: string
      description: string
      tel: string
    }
  }
  a: {
    request: {
      a: number
    }
    response: {
      a: string
    }
  }
  b: {
    request: {
      b: number
    }
    response: {
      statusCode: number
      message: string
    }
  }
}
