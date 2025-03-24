import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dotenv from 'dotenv'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  tailwindcss(),
  ],
  base: "/Shrek-YourOgreBae",
  define: {
    'process.env.VITE_HF_ACCESS_TOKEN': JSON.stringify(import.meta.env.VITE_HF_ACCESS_TOKEN),
  }
})
