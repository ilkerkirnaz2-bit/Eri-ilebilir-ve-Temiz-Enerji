// vite.config.js (SON KESİN KOD)

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [react()],
  // Tailwind CSS'in derlenmesi için gerekli postcss ayarları
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
  base: '/', 
  build: {
    // Vite'ın hangi dosyaları tarayacağını belirtme (Tailwind için kritik)
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
    outDir: 'dist', 
  },
})
