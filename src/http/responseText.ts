import { ElNotification } from 'element-plus'
import type { PresetHandle } from './types'

export const setResponseText: PresetHandle = (promise, { responseText }) => {
  promise
    .then(() => {
      let showNotify = false
      let message = '更新成功'

      if (typeof responseText === 'boolean' && responseText) {
        showNotify = true
      }
      if (typeof responseText === 'string' && responseText.length > 0) {
        showNotify = true
        message = responseText
      }

      if (showNotify) {
        ElNotification({
          title: '提示',
          message,
          type: 'success'
        })
      }
    })
    .catch(err => err)
}
