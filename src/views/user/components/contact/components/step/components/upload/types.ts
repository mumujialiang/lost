export interface Form {
  name: string
  sex: '男' | '女'
  img: string
  accept: boolean
}

export interface Emits {
  (e: 'submit', value: Form): void
}
