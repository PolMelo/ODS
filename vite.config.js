import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    plugins: [react()],
    root: './assets',
    base: isProduction ? '/build/' : '/',
    build: {
      outDir: '../public/build',
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'assets/react/main.jsx'),
        },
      },
    },
    server: {
      host: true,
      port: 5173,
      strictPort: true,
      allowedHosts: true, // Permite cualquier dominio (útil para NGROK)
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'assets'),
      },
    },
  };
});
