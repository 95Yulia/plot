const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')


module.exports = {
    entry: ['./src/main.js'],
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname,'dist'),
        }
    },
    plugins: [
        new HTMLPlugin(
            {
                filename: 'index.html',
                template: "./src/index.html"
            }
        )
    ],
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}