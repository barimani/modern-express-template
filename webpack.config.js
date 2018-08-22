const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require( 'nodemon-webpack-plugin' );

module.exports = {
    mode: 'development',
    watch: true,
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: [path.resolve(__dirname, 'src')],
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
        new NodemonPlugin()
    ],
    externals: [nodeExternals()],

};