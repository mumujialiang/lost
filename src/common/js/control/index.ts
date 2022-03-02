import { ElMessage } from 'element-plus'
import type { ShowFormVerifyErrorArg } from './types'

export const showFormVerifyError = (err: ShowFormVerifyErrorArg) => {
  for (const key in err) {
    const { message } = err[key][0]
    ElMessage.error({
      message,
      duration: 6000
    })
    break
  }
}

export const telPrefixOption = [
  {
    label: '中国大陆',
    value: 86
  },
  {
    label: '中国香港',
    value: 852
  },
  {
    label: '中国台湾',
    value: 886
  },
  {
    label: '中国澳门',
    value: 853
  }
]
