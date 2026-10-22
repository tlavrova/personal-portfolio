import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Served from https://tlavrova.github.io/personal-portfolio/
  base: '/personal-portfolio/',
  plugins: [react()],
  build: {
    // gh-pages deploys this folder (see "deploy" script)
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
});
