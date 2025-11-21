import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    plugins: [react()],
    root: './assets',            // raíz de los assets
    base: isProduction ? '/build/' : '/',  // en producción apunta a /build
    build: {
      outDir: '../public/build',  // salida de compilación
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
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'assets'),
      },
    },
  };
});
