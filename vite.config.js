// vite.config.js
export default {
  build: {
    rollupOptions: {
      external: ['rollup', 'node:path', 'fsevents']
    }
  }
}