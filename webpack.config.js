const portfinder = require('portfinder')
const webpackConfig = require('./webpack.config.base')

const PORT = process.env.PORT || 3000

// 空いているポート番号のベースとなるポート番号の設定
portfinder.basePort = PORT

// ポート番号を割り当ててから実行させる
module.exports = portfinder.getPortPromise()
    .then(port => {
        webpackConfig.devServer.port = port
        return webpackConfig
    })
    .catch(err => err)
