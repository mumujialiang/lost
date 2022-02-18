import type { Index } from './views/index'
import type { Test } from './views/test'

type AddPrefix<prefix extends string, T> = {
  [K in keyof T as `/${prefix}/${string & K}`]: T[K]
}

type AddDefaultPreset<T> = {
  [K in keyof T]: {
    request: T[K] extends { request: Record<string, unknown> }
      ? T[K]['request']
      : unknown
    response: T[K] extends { response: Record<string, unknown> }
      ? T[K]['response']
      : unknown
  }
}

export type IndexMockApi = AddDefaultPreset<Index>
export type IndexMockApiHasPrefix = AddPrefix<'index', IndexMockApi>
export type TestMockApi = AddDefaultPreset<Test>
export type TestMockApiHasPrefix = AddPrefix<'test', TestMockApi>

export type AllApi = IndexMockApi & TestMockApi
export type AllApiHasPrefix = IndexMockApiHasPrefix & TestMockApiHasPrefix
