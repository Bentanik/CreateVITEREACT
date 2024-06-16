import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const ReactCompilerConfig = {};

export default defineConfig({
  optimizeDeps: {
    include: ["*.jpeg", "*.jpg", "*.png", "*.gif", "*.svg"],
  },
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
      },
    }),
  ],
  resolve: {
    alias: {
      "~/": new URL("./src/", import.meta.url).pathname,
      "@components": new URL("./src/components", import.meta.url).pathname,
      "@pages": new URL("./src/pages", import.meta.url).pathname,
      "@assets": new URL("./src/assets", import.meta.url).pathname,
      "@controllers": new URL("./src/controllers", import.meta.url).pathname,
      "@services": new URL("./src/services", import.meta.url).pathname,
      "@stores": new URL("./src/stores", import.meta.url).pathname,
      "@utils": new URL("./src/utils", import.meta.url).pathname,
    },
  },
});
