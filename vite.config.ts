import Icons from 'unplugin-icons/vite'
import Inspect from 'vite-plugin-inspect'
import Markdown from 'vite-plugin-md'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath, URL } from 'url'
import { viteMockServe } from 'vite-plugin-mock'
import type { ConfigEnv, UserConfigExport } from 'vite'

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/]
      }),
      vueJsx(),
      Inspect(),
      Icons({
        autoInstall: true
      }),
      Markdown(),
      viteMockServe({
        mockPath: 'src/http/mock',
        localEnabled: command === 'serve'
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@http': fileURLToPath(new URL('./src/http/index.ts', import.meta.url))
      }
    }
  }
}
