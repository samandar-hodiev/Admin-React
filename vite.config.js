import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@images": path.resolve(__dirname, "./src/assets/images"),
      "@icons": path.resolve(__dirname, "./src/assets/icons"),
      "@mainLayouts": path.resolve(__dirname, "./src/main-layout"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@forma": path.resolve(__dirname, "./src/components/forma"),
      "@layouts": path.resolve(__dirname, "./src/components/layouts"),
      "@ui": path.resolve(__dirname, "./src/components/ui"),
    },
  },
});
