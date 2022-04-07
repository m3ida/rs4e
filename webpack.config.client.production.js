const path = require('path');
const webpack = require('webpack');
const CURRENT_WORKING_DIR = process.cwd();
const config = {
    mode: 'production',
    entry: [path.join(CURRENT_WORKING_DIR, 'client/index.js')],
    output: {
        path: path.join(CURRENT_WORKING_DIR, '/dist'),
        filename: 'bundle.js',
        publicPath: '/dist/',
    },
    plugins: [],
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/i,
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
};
module.exports = config;
