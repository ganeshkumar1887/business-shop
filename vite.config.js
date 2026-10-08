import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@uploaded': 'C:/Users/91778/.gemini/antigravity-ide/brain/41f96805-3da1-4b0e-902b-0839ff74ec2e/.user_uploaded'
    }
  },
  server: {
    host: true,
    port: 3001,
    strictPort: false,
    open: true,
    fs: {
      strict: false,
      allow: [
        '..',
        'C:/Users/91778/.gemini/antigravity-ide/brain/41f96805-3da1-4b0e-902b-0839ff74ec2e/.user_uploaded',
        'C:/Users/91778'
      ]
    }
  }
});
