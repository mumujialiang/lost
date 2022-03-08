export interface Login {
  login: {
    request: {
      type: 'password' | 'message'
      password?: {
        account: string
        password: string
      }
      message?: {
        tel: string
        telPrefix: number
        code: string
      }
    }
  }
  authCode: {
    response: unknown
  }
}
