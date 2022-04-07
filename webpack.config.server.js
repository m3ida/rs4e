const path = require('path');
const webpack = require('webpack');
const CURRENT_WORKING_DIR = process.cwd();
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
    name: 'server',
    entry: [path.join(CURRENT_WORKING_DIR, './server/server.js')],
    target: 'node',
    output: {
        path: path.join(CURRENT_WORKING_DIR, '/dist/'),
        filename: 'server.generated.js',
        publicPath: '/dist/',
        libraryTarget: 'commonjs2',
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif|ttf|woff2)$/i,
                loader: 'file-loader',
                options: {
                    publicPath: '/rs4e/dist',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('./index.html'),
        }),
    ],
};
module.exports = config;
