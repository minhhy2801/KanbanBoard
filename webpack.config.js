var path = require('path');
// var HtmlWebpackPlugin =  require('html-webpack-plugin');
require("babel-polyfill");

module.exports = {
    entry: ['babel-polyfill','./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    }
    // plugins : [
    //     new HtmlWebpackPlugin ({
    //         template : 'app/index.html'
    //     })
    // ]

}