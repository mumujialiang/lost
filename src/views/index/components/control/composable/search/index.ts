import { loadMap } from '@/common/js/map/load'
import type { AutoComplete, QuerySearch } from './types'

export const useSearch = () => {
  let autoComplete: AutoComplete = null

  // 加载地址输入提示
  loadMap({
    plugins: ['AMap.AutoComplete']
  }).then(AMap => {
    autoComplete = new AMap.Autocomplete({
      city: '全国'
    })
    console.log(AMap, autoComplete)
  })

  // 搜索
  const querySearch: QuerySearch = (query, callback) => {
    autoComplete?.search(query, (status, result) => {
      if (status === 'complete' && result.info === 'OK') {
        const tips = result.tips.map(({ district, name }) => ({
          value: district + name
        }))
        callback(tips)
      }
    })
  }

  return {
    querySearch
  }
}
