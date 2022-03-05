import { ref } from 'vue'
import { api, type ApiResponse } from '@http'

export const useApplicant = () => {
  const applicantList = ref<ApiResponse<'/user/posting/applicant'>['list']>([])
  const showApplicant = ref(false)
  const applicantLoading = ref(false)

  let prevItem: unknown = null
  const loadApplicant = (data: unknown) => {
    showApplicant.value = true
    if (data === prevItem) {
      return
    } else {
      prevItem = data

      api({
        flag: '/user/posting/applicant',
        data,
        loadingRef: applicantLoading,
        showLoading: false
      }).then(res => {
        applicantList.value = res.list
      })
    }
  }

  const report = (data: unknown) => {
    api({
      flag: '/user/posting/report',
      data,
      showLoading: true,
      responseText: '举报成功'
    })
  }
  return {
    showApplicant,
    applicantLoading,
    applicantList,
    loadApplicant,
    report
  }
}
