import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const isInPipeline = process.env.CI === "true" || process.env.NODE_ENV === "production";
const base = isInPipeline ? '/culturalgold/' : '/';
console.log("base vite.config:", base);

export default defineConfig(({ mode }) => ({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  basename: base
}));