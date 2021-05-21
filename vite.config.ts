import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import webTestRunner from "vite-web-test-runner-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), webTestRunner()],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
});
