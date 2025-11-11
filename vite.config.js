import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',          // kořen projektu
  base: './',         // relativní cesty (dobré pro deployment)
  build: {
    outDir: 'dist',   // složka pro finální build
  },
});
