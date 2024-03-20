const vueAPI = {
    '/onlineZT': {
        target: 'xxxxx', //线上中台类
        changeOrigin: true,
        // secure: false, // 将安全设置为false,才能访问https开头的
        pathRewrite: {
            '^/onlineZT': ''
        }
    },
}
module.exports = vueAPI
