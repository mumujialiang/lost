import { onMounted, ref } from 'vue'
import lottie from 'lottie-web'
import animationData from './lottie.json'

export const useLoading = () => {
  const loadingElement = ref(null)

  onMounted(() => {
    if (loadingElement.value !== null) {
      lottie.loadAnimation({
        container: loadingElement.value,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData
      })
    }
  })

  return {
    loadingElement
  }
}
