// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Sitenin Netlify'da doğru yolu bulmasını sağlayan yapılandırma
export default defineConfig({
  plugins: [react()],
  // Netlify için mutlak kök yolu ayarlama
  base: '/', 
  build: {
    // Çıktı klasörünün "dist" olduğunu kesinleştirme
    outDir: 'dist', 
  },
})
