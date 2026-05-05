import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 代理通义万相API请求
      '/api/dashscope': {
        target: 'https://dashscope.aliyuncs.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/dashscope/, '/api/v1'),
        headers: {
          'Origin': 'https://dashscope.aliyuncs.com'
        }
      }
    }
  }
})
