import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   build: {
    rollupOptions: {
      input: {
        Home: 'src/Home/Home.jsx',
        Presencas: 'src/Presencas/Presencas.jsx',
        Postagem: 'src/Postagem/Postagem.jsx',
      },
    
    },
  },
  base: '/frontendexpo',
});
