import path from 'path'

export default {
  root: path.resolve(__dirname, './'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `@import "~bootstrap/scss/bootstrap";`,
//       },
//     },
//   },
  server: {
    port: 8080,
    hot: true
  }
}