module.exports = {
  productionSourceMap: false,
  transpileDependencies: ['vuex-persist'],
  configureWebpack: {
    devtool: 'source-map',
  },
  css: {
    loaderOptions: {
      scss: {},
    },
  },
};
