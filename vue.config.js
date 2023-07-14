module.exports = {
  publicPath: './', // 配置打包后本地可双击index.html打开
  productionSourceMap: false, // 是否为生产环境构建生成sourceMap
  // outputDir: 'hello', // 打包名称
  lintOnSave: false,    // 关闭eslint保存代码时检查

  devServer: {
    port: 8088,
    https: false,
    hotOnly: true, // 允许热加载
    open: true,
    disableHostCheck: true,

    overlay: {
      warnings: false,  // 关闭eslint检查提示警告信息时的蒙层
      errors: false  // 关闭eslint检查提示错误信息时的蒙层
    },
    proxy: {
      "/api": {
        target: "http://xxx/api",   // 需要跨域的地址
        changeOrigin: true,  // 改变源
        ws: true,  //  websocket开启
        secure: false,   // https检查
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "./src/assets/styles/element.scss";`,
      }
    }
  }
  
  // Webpack配置
  // chainWebpack: (config) => {
  //   // 配置 html
  //   config
  //     .plugin('html')
  //     .tap(args => {
  //       args[0].title = '空间'; // 设置 html 标题
  //       return args;
  //     });
  // }
}