import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative asset paths so the bundle works served from a bucket root or a subpath.
  base: './',
  build: {
    // Must stay 'build': .github/workflows/main.yml syncs ./build to S3.
    outDir: 'build',
    emptyOutDir: true,
  },
})
