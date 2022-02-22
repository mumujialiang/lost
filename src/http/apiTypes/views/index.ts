/*
  TODO: 增加类似类型 extends Record<string,{
    request: unknown
    response: unknown
  }>
*/
// 推荐使用使用query create update remove ，区分批量可使用复数，真实接口标识根据实际调整

export interface Index {
  queryMapPoints: {
    response: {
      points: {
        lng: number
        lat: number
        img: string
        id: string
        description: string
        disable: boolean
      }[]
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
