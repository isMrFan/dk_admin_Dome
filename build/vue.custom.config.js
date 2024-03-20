const vueAPIConfig = require("./vue.proxy.config")
const encryptionJson = require("./vue.encryption.config")
const vueDefaultConfig = {
    devName: '欢迎使用isMrFan搭建的基于vue-element-admin架构的前端框架',
    devColor: '#f40',
    corporationName:'力威公司',
    devPort: '6097',
    https:false,
    encryptionJson: encryptionJson,
    encryption:false,
    proxy: vueAPIConfig,
    startMessage:'欢迎使用isMrFan搭建的基于vue-element-admin架构的前端框架'
}
module.exports = vueDefaultConfig