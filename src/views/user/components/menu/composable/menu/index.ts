import { useRoute } from 'vue-router'
import carbonUser from '~icons/carbon/user'
import CarbonSendAlt from '~icons/carbon/send-alt'
import CarbonRequestQuote from '~icons/carbon/request-quote'
import CarbonNotification from '~icons/carbon/notification'

export const useMenu = () => {
  const { path } = useRoute()

  const prefix = '/nav/user/'
  const matchResult = path.match(/(\w+)$/g)
  const lastWord = matchResult ? matchResult[0] : ''
  const defaultActive = `${prefix}${lastWord}`

  const menu = [
    {
      label: '账户信息',
      icon: carbonUser,
      path: 'account'
    },
    {
      label: '发布信息历史',
      icon: CarbonSendAlt,
      path: 'posting'
    },
    {
      label: '申请联系历史',
      icon: CarbonRequestQuote,
      path: 'contact'
    },
    {
      label: '系统通知',
      icon: CarbonNotification,
      path: 'system'
    }
  ]
  return {
    prefix,
    defaultActive,
    menu
  }
}
