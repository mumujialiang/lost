export type AutoComplete = null | {
  search: (
    query: string,
    callback: (
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
          location: string
          name: string
        }[]
      }
    ) => void
  ) => void
}

export interface QuerySearch {
  (query: string, callback: (data: { value: string }[]) => void): void
}
