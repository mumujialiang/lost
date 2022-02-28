import type { Ref } from 'vue'
import type { Location } from '../../types'

export interface UsePointsArg {
  date: Ref<string>
  location: Ref<Location>
}
