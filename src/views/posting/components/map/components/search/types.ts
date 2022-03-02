export interface QuerySearch {
  (
    queryString: string,
    callBack: (
      arg: {
        lat: number
        lng: number
        value: string
      }[]
    ) => void
  ): void
}

export interface Location {
  KL: number
  className: string
  kT: number
  lat: number
  lng: number
  pos: number[]
}

export interface SearchCallBack {
  (
    status: string,
    result: {
      count: number
      info: string
      tips: {
        adcode: string
        address: string
        city: unknown[]
        district: string
        id: string
        location: '' | Location
        name: string
        typecode: string
      }[]
    }
  ): void
}

export interface TipsItem {
  lat: number
  lng: number
  value: string
}
