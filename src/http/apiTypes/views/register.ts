export interface Register {
  register: {
    request: {
      name: string
      password: string
      tel: string
      telPrefix: number
      code: string
      accept: boolean
    }
  }
  authCode: {
    response: unknown
  }
}
