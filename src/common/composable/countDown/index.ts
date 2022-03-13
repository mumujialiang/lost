import { useStorage } from '@vueuse/core'

export const useCountDown = () => {
  const countDownInit = 60
  const countDown = useStorage<number>('login-authCode', countDownInit)

  const countDownHandle = () => {
    const setIntervalFlag = setInterval(() => {
      if (countDown.value === 0) {
        countDown.value = countDownInit
        clearInterval(setIntervalFlag)
      } else {
        countDown.value = countDown.value - 1
      }
    }, 1000)
  }

  if (countDown.value !== countDownInit) {
    countDownHandle()
  }

  return {
    countDownInit,
    countDown,
    countDownHandle
  }
}
