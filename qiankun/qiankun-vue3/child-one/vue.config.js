module.exports = {
    lintOnSave: false,
    devServer: {
        port: "3001",
        headers: {
            "Access-Control-Allow-Origin": "*", //所有人都可以访问我的服务器
        },
    },
    configureWebpack: {
        output: {
            // library: `${name}-[name]`,
            library: `vueChildOne`,
            libraryTarget: "umd", // 把微应用打包成 umd 库格式
            // jsonpFunction: `webpackJsonp_${name}`,
        },
    },
};