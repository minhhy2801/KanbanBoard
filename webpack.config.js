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
            {test: /\.ts?$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-typescript"],
                        plugins: ["transform-class-properties"]
                    }
                }},
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"],
        modules: [
            'node_modules',
            path.resolve(__dirname, './public')
        ]
    },
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
            {test: /\.ts?$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-typescript"],
                        plugins: ["transform-class-properties"]
                    }
                }},
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"],
        modules: [
            'node_modules',
            path.resolve(__dirname, './public')
        ]
    },
}

module.exports = [kanbanViewConfig, configViewConfig]