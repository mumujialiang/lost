import { ElNotification } from 'element-plus'
import type { ExceptionHandle } from './types'

export const exceptionHandle: ExceptionHandle = error => {
  let title = ''
  let message = ''

  // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
  if (error.response) {
    const { data } = error.response

    title = `发生错误，错误码: ${data.statusCode}`
    message = data.message

    // 请求已经成功发起，但没有收到响应
  } else if (error.request) {
    title = '网络异常，请尝试刷新网页'
    message = '检查网络或联系管理员'

    // 网络异常如断网时
  } else {
    title = '遇到未知错误'
    message = '尝试刷新网页，或联系管理员'
  }

  ElNotification({
    title,
    message,
    type: 'error',
    duration: 0
  })

  try {
    console.error('错误详情：', error?.toJSON())
  } catch (err) {
    err
  }
}
