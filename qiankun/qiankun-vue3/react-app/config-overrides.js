module.exports = {
  webpack: (config) => {
    config.output.library = `reactApp1`;
    config.output.libraryTarget = "umd";
    // config.jsonpFunction = `webpackJsonp_reactApp1`;
    config.output.globalObject = "window";
    return config;
  },
  devServer: (_) => {
    const config = _;
     // 配置跨域请求头，解决开发环境的跨域问题
    config.headers = {
      "Access-Control-Allow-Origin": "*",
    };
    config.historyApiFallback = true;
    config.hot = false;
    config.watchContentBase = false;
    config.liveReload = false;

    return config;
  },
};
