import type { Ref } from 'vue'
import type { AxiosError } from 'axios'

export interface RequestOption {
  /**接口标识 */
  flag: string

  /**提交的数据，实际数据位置会在转换区重新放置 */
  data: Record<string, unknown>

  /**是否使用全屏加载动画 */
  showLoading: boolean

  /**维护loading变量的状态 */
  loadingRef: Ref<boolean>

  /**接口调用完毕在右上角显示通知 */
  responseText: string | boolean
}

export interface PresetHandle {
  (promise: Promise<unknown>, request: RequestOption): void
}

interface HttpException {
  statusCode: number
  message: string
}

export interface ExceptionHandle {
  (error: AxiosError<HttpException>): void
}
