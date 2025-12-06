import type { Config } from "@react-router/dev/config";

const isInPipeline = process.env.CI === "true" || process.env.NODE_ENV === "production";
const base = isInPipeline ? '/culturalgold/' : '/';
console.log("base react-router.config:", base);
export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  basename: base,
} satisfies Config;
