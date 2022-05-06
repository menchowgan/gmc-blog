module.exports = {
  lintOnSave: false,
  devServer: {
    port: 8080,
    proxy: {
      '/hello': {
        target: "http://127.0.0.1:8888",
        changeOrigin: true
      },
      '/user/person-info-post': {
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