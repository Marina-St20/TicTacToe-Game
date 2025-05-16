// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/TicTacToe-Game/',  // <-- set this to your GitHub repo name with slashes
  plugins: [react()],
})
