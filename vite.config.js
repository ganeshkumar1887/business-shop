import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

function syncUploadedImages() {
  const srcDir = 'C:\\Users\\91778\\.gemini\\antigravity-ide\\brain\\6614c9ab-a635-40b3-b499-8957713bf2b3\\.user_uploaded';
  const targetDir = path.resolve(__dirname, 'public/images/products');
  try {
    if (fs.existsSync(srcDir)) {
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      const mapping = {
        'media_1791522718967.jpg': 'teddy-bear.jpg',
        'media_1791523164067.png': 'panda-soft-toy.png',
        'media_1791523378500.jpg': 'couple-teddy.jpg',
        'media_1791523480145.jpg': 'large-teddy-bear.jpg',
        'media_1791523760842.jpg': 'cute-bunny.jpg',
        'media_1791523961122.jpg': 'cartoon-soft-toy.jpg',
        'media_1791523978407.jpg': 'heart-teddy.jpg',
        'media_1791523945819.png': 'mini-soft-toy.png',
        'media_1791525078918.jpg': 'bday-gift-hamper.jpg',
        'media_1791525159889.png': 'bday-led-lamp.png',
        'media_1791525265774.jpg': 'bday-personalized-gift.jpg',
        'media_1791525609270.png': 'bday-mug.png',
        'media_1791525644386.png': 'bday-name-plate.png',
        'media_1791525814848.jpg': 'bday-decoration-set.jpg',
        'media_1791527547690.jpg': 'couple-mug-set.jpg',
        'media_1791528095040.jpg': 'couple-photo-frame.jpg',
        'media_1791528161843.png': 'heart-led-lamp.png'
      };
      for (const [srcFile, destFile] of Object.entries(mapping)) {
        const srcPath = path.join(srcDir, srcFile);
        const destPath = path.join(targetDir, destFile);
        if (fs.existsSync(srcPath)) {
          fs.copyFileSync(srcPath, destPath);
        }
      }
    }
  } catch (err) {
    console.error('Error syncing uploaded images:', err);
  }
}

syncUploadedImages();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@uploaded': path.resolve(__dirname, './src/assets/images')
    }
  },
  server: {
    host: true,
    port: 3001,
    strictPort: false,
    open: true
  }
});

