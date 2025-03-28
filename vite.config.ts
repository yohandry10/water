import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      // Disable native modules
      context: 'globalThis'
    }
  },
  server: {
    port: 5173
  },
  preview: {
    port: 5173
  }
});
