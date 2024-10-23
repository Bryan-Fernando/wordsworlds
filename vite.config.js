import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/wordsworlds/',  // isso garante que os caminhos estarão corretos para o GitHub Pages
});