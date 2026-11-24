import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/viajes-felipe-hidalgo-PFY2202/',
  plugins: [react(), tailwindcss()],
})