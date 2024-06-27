import { fileURLToPath, URL } from 'node:url'

import { defineConfig ,loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite 配置
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      // 服务器端口号配置，默认为 8888，如果 VITE_APP_PORT 配置了其他值，则使用其他值
      port: Number(env.VITE_APP_PORT) || 3000,
      
      // 代理配置，解决前端跨域问题
      proxy: {
        // 使用环境变量中的 VITE_APP_API 作为代理的路径前缀，如 "/test"
        [env.VITE_APP_API]: {
          // 代理目标地址，即后端服务器的地址
          target: env.VITE_APP_API_BASEURL,
          
          // 是否更改请求的源头地址，为 true 时会将请求头中的 Origin 修改为目标地址
          changeOrigin: true,

          // 重写路径，去掉路径中的前缀部分
          rewrite: path => path.replace(new RegExp(`^${env.VITE_APP_API}`), ''),
        },
      },
    }
  }
})

