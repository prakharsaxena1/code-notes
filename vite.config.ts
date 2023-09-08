import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(() => ({
  define: {
    'process.env': {},
  },
  server: {
    open: true,
    port: 3000,
  },
  build: {
    outDir: 'build',
  },
  plugins: [react()],
}));