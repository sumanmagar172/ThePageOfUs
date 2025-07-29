// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ThePageOfUs/',
  plugins: [react()],
   build: {
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  },
  server: {
    host: true, // This makes it accessible from other devices on your network
    port: 5173, // Optional: ensure it uses your desired port
  }
});