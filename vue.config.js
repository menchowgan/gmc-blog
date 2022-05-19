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
      '/user/get-user-simple-info': {
        target: "http://127.0.0.1:8888",
        changeOrigin: true
      },
      '/user/search-user-brief': {
        target: "http://127.0.0.1:8888",
        changeOrigin: true
      },
      '/user/person-info-post': {
        target: "http://127.0.0.1:8888",
        changeOrigin: true
      },

      "/photo/avatar/upload": {
        target: "http://127.0.0.1:8888",
        changeOrigin: true
      },
      "/photo/upload": {
        target: "http://127.0.0.1:8888",
        changeOrigin: true
      },
      "/photo/get": {
        target: "http://127.0.0.1:8888",
        changeOrigin: true
      },
      '/photo/user/photos/upload': {
        target: "http://127.0.0.1:8888",
        changeOrigin: true
      },
      '/photo/user/photos/delete': {
        target: "http://127.0.0.1:8888",
        changeOrigin: true
      },

      "/music/upload": {
        target: "http://127.0.0.1:8888",
        changeOrigin: true
      },
      "/music/cover/upload": {
        target: "http://127.0.0.1:8888",
        changeOrigin: true
      },
      "/music/user/upload": {
        target: "http://127.0.0.1:8888",
        changeOrigin: true
      },

      "/article/photo/upload": {
        target: "http://127.0.0.1:8888",
        changeOrigin: true
      },
      "/article/avatar/upload": {
        target: "http://127.0.0.1:8888",
        changeOrigin: true
      },
      "/article/upload": {
        target: "http://127.0.0.1:8888",
        changeOrigin: true
      },
      "/article/query": {
        target: "http://127.0.0.1:8888",
        changeOrigin: true
      },
      "/article/query-by-type": {
        target: "http://127.0.0.1:8888",
        changeOrigin: true
      },

      "/video/upload": {
        target: "http://127.0.0.1:8888",
        changeOrigin: true
      },
      "/video/cover/upload": {
        target: "http://127.0.0.1:8888",
        changeOrigin: true
      },
      "/video/user/upload": {
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