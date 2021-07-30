const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/client/index.tsx',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.js'
    },
    watch: true,
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,//keeping react files around, but we're not going to use them for now
                use: ["babel-loader"]
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"]
            },
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    resolve: {
        alias: {
            Util: path.resolve(__dirname, 'src/client/Util/'),
            css: path.resolve(__dirname, 'src/client/css/')
        }
    },
    plugins: [
        new Dotenv()
    ]
};