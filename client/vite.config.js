import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // plugins: [nextui()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": "/src/components",
      "@components/ui": "/src/components/ui",
    },
  },
  css: {
    preprocessorOptions: {
      css: {
        // Make sure to adjust the path if necessary
        additionalData: `@import "@nextui-org/react/dist/nextui.css";`,
      },
    },
  },
});
