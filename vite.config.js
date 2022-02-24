import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import pluginEnv from "vite-plugin-vue-env";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), pluginEnv()],
  define: {
    "process.env": {},
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
