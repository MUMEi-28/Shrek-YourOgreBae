import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dotenv from 'dotenv'

dotenv.config(); // Load .env file

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/Shrek-YourOgreBae",
  define: {
    'import.meta.env.VITE_HF_ACCESS_TOKEN': JSON.stringify(process.env.VITE_HF_ACCESS_TOKEN),
  }
})
