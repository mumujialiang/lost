import { markRaw, ref } from 'vue'
import { useRoute } from 'vue-router'
import CarbonSearch from '~icons/carbon/search'
import CarbonSendAlt from '~icons/carbon/send-alt'
import CarbonLink from '~icons/carbon/link'
import CarbonInformationSquare from '~icons/carbon/information-square'
import CarbonEdit from '~icons/carbon/edit'

const createNavOption = () => {
  const parentPath = '/menu'
  const option = [
    {
      label: '找失物',
      path: 'index',
      icon: markRaw(CarbonSearch)
    },
    {
      label: '找失主',
      path: 'posting',
      icon: markRaw(CarbonSendAlt)
    },
    {
      label: '友情链接',
      path: 'friendLink',
      icon: markRaw(CarbonLink)
    },
    {
      label: '关于我们',
      path: 'about',
      icon: markRaw(CarbonInformationSquare)
    },
    {
      label: '留言',
      path: 'leaveWord',
      icon: markRaw(CarbonEdit)
    }
  ].map(item => ({
    ...item,
    path: `${parentPath}/${item.path}`
  }))

  return option
}

export const useMenu = () => {
  const { path } = useRoute()
  const activePath = ref(path)
  const navOption = ref(createNavOption())

  return {
    activePath,
    navOption
  }
}
