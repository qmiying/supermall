module.exports = {
  // 配置别名
  configureWebpack: {
    resolve: {
      alias: {
        // 默认的别名src已有设置：'@':'src'
        'assets': '@/assets',
        'commom': '@/commom',
        'components': '@/components',
        'network': '@network',
        'views': '@/views'
      }
    }

  }
}