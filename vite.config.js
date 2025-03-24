import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  tailwindcss(),
  ],
  base: "/Shrek-YourOgreBae",
  define: {
    'process.env.VITE_APP_AI': JSON.stringify(process.env.VITE_APP_AI)
  }
})
