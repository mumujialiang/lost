import type { MockMethod } from 'vite-plugin-mock'
import { index } from './views'
import { posting } from './views/posting'
import { leaveWord } from './views/leaveWord'
import { posting as userPosting } from './views/user/posting'
import { contact } from './views/user/contact'
import { test } from './views/test'

const map = {
  index,
  posting,
  leaveWord,
  'user/posting': userPosting,
  'user/contact': contact,
  test
}

export default Object.entries(map)
  .map(([prefix, value]) => {
    return Object.entries(value).map(([url, preset]) => {
      const item: MockMethod = {
        ...preset,
        method: 'post',
        url: `/${prefix}/${url}`
      }
      return item
    })
  })
  .flat()
