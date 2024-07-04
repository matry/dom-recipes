// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  esbuild: {
    jsx: "transform",
    jsxDev: false,
    jsxInject: `import { jsx } from '@matry/dom'`,
    jsxFactory: "jsx.component",
  },
});