import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0', // Allows access from local network
    port: 8080, // Default port is 5173, you can change it
    open: true, // Automatically open the app in the browser
  }
})
