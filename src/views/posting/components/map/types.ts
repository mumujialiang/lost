export interface GetAddressCallBack {
  (
    status: string,
    result: {
      info: string
      regeocode: {
        addressComponent: Record<string, unknown>
        crosses: unknown[]
        formattedAddress: string
        pois: unknown[]
        roads: unknown[]
      }
    }
  ): void
}

export interface SetLocationEmitDto {
  lat: number
  lng: number
}
