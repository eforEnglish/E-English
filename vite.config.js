import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use a relative base so it works on GitHub Pages under /E-English/
export default defineConfig({
  plugins: [react()],
  base: './',
})
