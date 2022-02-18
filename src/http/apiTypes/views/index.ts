/*
  TODO: 增加类似类型 extends Record<string,{
    request: unknown
    response: unknown
  }>
*/
export interface Index {
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
