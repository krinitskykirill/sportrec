import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "node:path";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@assets/styles/_variables.scss";`,
      },
    },
  },
  server: {
    open: true,
    port: 3000,
  },
});
