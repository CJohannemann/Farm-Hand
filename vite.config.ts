import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {createHtmlPlugin} from "vite-plugin-html";

export default defineConfig({
  plugins: [vue(),
    createHtmlPlugin({
      minify: true,
    }),
  ],
  server: {
    host: '0.0.0.0', // Allows access from local network
    port: 3000, // Default port is 5173, you can change it
    open: true, // Automatically open the app in the browser
  }
})
