import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

//const repoName = 'notspotify';

// https://vite.dev/config/
export default defineConfig({
  base: '/notspotify/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
