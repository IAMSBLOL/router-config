import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath, URL } from 'node:url'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
      '@/components': fileURLToPath(new URL('src/components', import.meta.url)),
      '@/assets': fileURLToPath(new URL('src/assets', import.meta.url))
    }
  }
})
