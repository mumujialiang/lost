import { ElLoading } from 'element-plus'
import type { PresetHandle } from './types'

export const setLoading: PresetHandle = (
  promise,
  { showLoading, loadingRef }
) => {
  let loadingInstance: ReturnType<typeof ElLoading.service> | null = null

  if (showLoading) {
    loadingInstance = ElLoading.service({
      fullscreen: true,
      lock: true,
      body: true,
      text: '加载中...'
    })
  }
  loadingRef.value = true

  promise
    .catch(err => err)
    .finally(() => {
      loadingRef.value = false
      if (showLoading) {
        loadingInstance?.close()
      }
    })
}
