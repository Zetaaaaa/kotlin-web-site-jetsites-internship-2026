import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],
  resolve: {
    dedupe: ["react", "react-dom"],
    alias: {
      "@js": path.resolve(__dirname, "static/js"),
      "@css": path.resolve(__dirname, "static/css"),
      "~": path.resolve(__dirname, "app"),
    },
  },
  ssr: {
    // To naprawia błąd "Unknown file extension .css"
    // Dodaj tutaj nazwy paczek od JetBrains, które importują CSS
    noExternal: [/^@jetbrains\/.*/, /^@rescui\/.*/, /static\/js/],
  },
  server: {
    port: 3000,
    fs: { allow: [".."] },
  },
});