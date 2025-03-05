import path from 'path';
import tailwindcss from 'tailwindcss'; // Correct import for Tailwind CSS
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], // Directly use tailwindcss plugin
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});