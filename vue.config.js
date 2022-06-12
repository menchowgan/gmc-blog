require("events").EventEmitter.defaultMaxListeners = 0;

module.exports = {
  lintOnSave: false,
  publicPath: "/admin-management",
  productionSourceMap: false,
  devServer: {
    port: 8088,
    proxy: {
      '/hello': {
        target: "http://8.136.84.136:8088",
        changeOrigin: true
      },
      "/user": {
        target: "http://8.136.84.136:8088",
        changeOrigin: true
      },

      "/photo": {
        target: "http://8.136.84.136:8088",
        changeOrigin: true
      },

      "/music": {
        target: "http://8.136.84.136:8088",
        changeOrigin: true
      },

      "/article": {
        target: "http://8.136.84.136:8088",
        changeOrigin: true
      },

      "/video": {
        target: "http://8.136.84.136:8088",
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