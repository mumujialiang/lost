import type { MockMethod } from 'vite-plugin-mock'

interface MockApiPreset {
  [path: string]: {
    request: Record<string, unknown> | unknown
    response: Record<string, unknown> | unknown
  }
}

export type UrlMap<T extends MockApiPreset> = {
  [K in keyof T]: {
    response: (option: T[K]['request']) => T[K]['response']
  } & Pick<MockMethod, 'statusCode'>
}
