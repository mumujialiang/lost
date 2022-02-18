import { ref } from 'vue'
import type { RequestOption } from './types'

export const defaultOption: RequestOption = {
  flag: '',
  data: {},
  showLoading: false,
  loadingRef: ref(false),
  responseText: false
}
