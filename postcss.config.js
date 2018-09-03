const pluginAutoPrefixer = require('autoprefixer');
const pluginCssMqpacker = require('css-mqpacker');

module.exports = {
    plugins: [
        // ベンダープレフィックスを自動付与する
        pluginAutoPrefixer(),
        pluginCssMqpacker(),
    ],
};
