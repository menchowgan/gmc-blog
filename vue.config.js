module.exports = {
  lintOnSave: false,
  devServer: {
    port: 8080
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