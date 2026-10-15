import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  build: { assetsInlineLimit: 0 },
  server: {
    host: '0.0.0.0',
    open: true
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  },
  plugins: [vue(), tailwindcss()]
})
