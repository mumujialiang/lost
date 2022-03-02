export interface Posting {
  submit: {
    request: {
      date: string
      img: unknown
      description: string
      tel: string
      telPrefix: number
      location: {
        lat: number
        lng: number
      }
    }
  }
}
