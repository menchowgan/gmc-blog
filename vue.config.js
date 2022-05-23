require("events").EventEmitter.defaultMaxListeners = 0;

module.exports = {
  lintOnSave: false,
  publicPath: "./",
  productionSourceMap: false,
  devServer: {
    port: 8080,
    proxy: {
      '/hello': {
        target: "http://127.0.0.1:8888",
        changeOrigin: true
      },
      "/user": {
        target: "http://127.0.0.1:8888",
        changeOrigin: true
      },

      "/photo": {
        target: "http://127.0.0.1:8888",
        changeOrigin: true
      },

      "/music": {
        target: "http://127.0.0.1:8888",
        changeOrigin: true
      },

      "/article": {
        target: "http://127.0.0.1:8888",
        changeOrigin: true
      },

      "/video": {
        target: "http://127.0.0.1:8888",
        changeOrigin: true
      },
    },
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= 'GMC-BLOG'
        return args
      })
  }
}