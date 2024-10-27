import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "@svgr/rollup";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import { fileURLToPath } from "url";

// Define __dirname for TypeScript
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), svgr(), tsconfigPaths()],
  server: {
    port: 5173,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@layout": path.resolve(__dirname, "src/layout/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@data": path.resolve(__dirname, "src/data/"),
      "@api": path.resolve(__dirname, "src/api/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
    },
  },
  build: {
    chunkSizeWarningLimit: 3000,
  },
});
