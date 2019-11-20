const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode : "development",
    entry : [
        "react-hot-loader/patch",
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        __dirname + "/src/index.js"
    ],
    output : {
        path : __dirname + "/public",
        filename : "bundle.js",
        publicPath : "/"
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                loader : "babel-loader",
                query : {
                    presets : ['@babel/preset-env', '@babel/preset-react'],
                    plugins : ['react-hot-loader/babel', '@babel/plugin-proposal-class-properties']

                }
            }
        ]
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            inject : true,
            template : __dirname + "/public/index.html"
        })
    ],
    devServer: {
        contentBase: './public',
        historyApiFallback: true,
        inline: true,
        hot: true,
        port: 8080
    }
};
