import type { Index } from './views/index'
import type { Posting } from './views/posting'
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
export type PostingMockApi = AddDefaultPreset<Posting>
export type PostingMockApiHasPrefix = AddPrefix<'posting', PostingMockApi>

export type AllApi = IndexMockApi & TestMockApi & PostingMockApi
export type AllApiHasPrefix = IndexMockApiHasPrefix &
  TestMockApiHasPrefix &
  PostingMockApiHasPrefix
