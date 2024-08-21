import { defineConfig, createLogger } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    hmr: {
      clientPort: parseInt(process.env.WEBSOCKET_PORT!),
    },
  },
  plugins: [react(), tsconfigPaths()],
  customLogger: createLogger('info', { prefix: '[coderpad]' }),
})
