const appName = require('./package.json').name;
module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  output: {
    library: 'angularApp1',
    libraryTarget: 'umd',
    jsonpFunction: `webpackJsonp_${appName}`,
  },
};