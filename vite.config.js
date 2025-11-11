// vite.config.js (YENİ İÇERİK)

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [react()],
  // Sadece build aşamasında postcss/tailwind'i çalıştırması için
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
    outDir: 'dist', 
  },
})
