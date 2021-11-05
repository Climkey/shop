const pxtorem = require('postcss-pxtorem')

/**
 * webpack 相关扩展配置
 */
module.exports = {
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          pxtorem({
            rootValue: 75,
            propList: ['*', '!font*'],
            exclude: 'vant',
          }),
        ],
      },
    },
  },
  devServer: {
    // open: ['/detail'],
    proxy: {
      '/store': {
        target: 'https://music.163.com',
        changeOrigin: true,
      },
    },
    open: true,
  },
}
