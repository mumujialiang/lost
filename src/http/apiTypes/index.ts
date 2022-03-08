import type { Index } from './views/index'
import type { Posting } from './views/posting'
import type { LeaveWord } from './views/leaveWord'
import type { Posting as UserPosting } from './views/user/posting'
import type { Contact } from './views/user/contact'
import type { Login } from './views/login'
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
export type LeaveWordMockApi = AddDefaultPreset<LeaveWord>
export type LeaveWordMockApiHasPrefix = AddPrefix<'leaveWord', LeaveWordMockApi>
export type UserPostingMockApi = AddDefaultPreset<UserPosting>
export type UserPostingMockApiHasPrefix = AddPrefix<
  'user/posting',
  UserPostingMockApi
>
export type ContactMockApi = AddDefaultPreset<Contact>
export type ContactMockApiHasPrefix = AddPrefix<'user/contact', ContactMockApi>
export type LoginMockApi = AddDefaultPreset<Login>
export type LoginMockApiHasPrefix = AddPrefix<'login', LoginMockApi>

export type AllApi = IndexMockApi &
  TestMockApi &
  PostingMockApi &
  LeaveWordMockApi &
  UserPostingMockApi &
  ContactMockApi &
  LoginMockApi

export type AllApiHasPrefix = IndexMockApiHasPrefix &
  TestMockApiHasPrefix &
  PostingMockApiHasPrefix &
  LeaveWordMockApiHasPrefix &
  UserPostingMockApiHasPrefix &
  ContactMockApiHasPrefix &
  LoginMockApiHasPrefix
