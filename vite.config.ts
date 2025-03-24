import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "./", // Usa "./" para evitar problemas con rutas absolutas
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
