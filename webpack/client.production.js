const merge = require('webpack-merge');
const common = require('./common');
const { join } = require('path');
const ExtractCssChunksPlugin = require('extract-css-chunks-webpack-plugin');
const StatsWebpackPlugin = require('stats-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    name: 'client',
    target: 'web',
    entry: [join(__dirname, '../src/client/index')],
    devtool: 'hidden-source-map',
    output: {
        filename: 'app.client.js',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.styl$/,
                exclude: /node_modules/,
                use: [
                    ExtractCssChunksPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]'
                        }
                    },
                    'postcss-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader'
                ]
            }
        ]
    },
    optimization: {
        runtimeChunk: {
            name: 'bootstrap'
        },
        splitChunks: {
            chunks: 'initial',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor'
                }
            }
        }
    },
    plugins: [
        new ExtractCssChunksPlugin(),
        new StatsWebpackPlugin('stats.json')
    ]
});
