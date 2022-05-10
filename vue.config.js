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