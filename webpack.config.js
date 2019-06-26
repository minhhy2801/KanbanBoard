var path = require('path');
require("babel-polyfill"); 

const kanbanViewConfig = {
    entry: ['babel-polyfill','./src/kanbanView/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'plugin.js'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    }
}

const configViewConfig = {
    entry: ['babel-polyfill','./src/configView/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'config.js'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    }
}

module.exports = [kanbanViewConfig, configViewConfig]