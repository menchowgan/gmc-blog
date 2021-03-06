import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"
import path from "path";

const resolve = (dir: string) => path.join(__dirname, dir)

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve("src")
    },
  },
  server: {
    port: 8080,
    open: true,
    proxy: {
      '/hello': {
        target: "http://127.0.0.1:8888",
        changeOrigin: true
      },
      "/user": {
        target: "http://127.0.0.1:8888",
        changeOrigin: true
      },

      "/photo": {
        target: "http://127.0.0.1:8888",
        changeOrigin: true
      },

      "/music": {
        target: "http://127.0.0.1:8888",
        changeOrigin: true
      },

      "/article": {
        target: "http://127.0.0.1:8888",
        changeOrigin: true
      },

      "/video": {
        target: "http://127.0.0.1:8888",
        changeOrigin: true
      },
    }
  }
})