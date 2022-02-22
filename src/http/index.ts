import axios from 'axios'
import lodashMerge from 'lodash-es/merge'
import { defaultOption } from './defaultOption'
import { exceptionHandle } from './exception'
import { setLoading } from './loading'
import { setResponseText } from './responseText'
import type { AllApiHasPrefix } from './apiTypes/index'
import type { RequestOption } from './types'

/*
TODO: option.data 的 typing 应该根据实际数据控制是否必传
*/
export const api = <T extends keyof AllApiHasPrefix>(
  option: {
    flag: T
    data?: AllApiHasPrefix[T]['request']
  } & Partial<Omit<RequestOption, 'flag' | 'data'>>
) => {
  const mixedOption = lodashMerge(defaultOption, option) as RequestOption

  const promise = new Promise((resolve, reject) => {
    axios({
      url: option.flag,
      method: 'post',
      data: mixedOption.data
    })
      .then(res => {
        // setTimeout 模拟网络情况
        setTimeout(() => {
          return resolve(res.data)
        }, 1000)
      })
      .catch(err => {
        exceptionHandle(err)
        return reject(err)
      })
  })

  setLoading(promise, mixedOption)
  setResponseText(promise, mixedOption)

  return promise as Promise<AllApiHasPrefix[T]['response']>
}

export type ApiResponse<T extends keyof AllApiHasPrefix> =
  AllApiHasPrefix[T]['response']
export type ApiRequest<T extends keyof AllApiHasPrefix> =
  AllApiHasPrefix[T]['request']
