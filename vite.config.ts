import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Inspect from 'vite-plugin-inspect'
import mkcert from 'vite-plugin-mkcert'
import DefineOptions from 'unplugin-vue-define-options/vite'
import WindiCSS from 'vite-plugin-windicss'
import path from 'path'

export default defineConfig(async () => {
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      },
    },
    server: {
      host: true,
      https: !!process.env.HTTPS,
    },
    plugins: [
      WindiCSS(),
      vue({
        reactivityTransform: true,
      }),
      vueJsx(),
      DefineOptions(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        include: `${__dirname}/**`,
        resolvers: ElementPlusResolver({ importStyle: 'sass' }),
        dts: false,
      }),
      mkcert(),
      Inspect(),
    ],
    optimizeDeps: {
      //
    },
  }
})
