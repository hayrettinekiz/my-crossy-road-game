// vite.config.js
export default {
  base: '/my-crossy-road-game/', // repo adınla birebir aynı
  build: {
    rollupOptions: {
      external: ['rollup', 'node:path', 'fsevents']
    }
  }
}