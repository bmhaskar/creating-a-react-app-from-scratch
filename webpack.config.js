/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
    'entry': './src/index.tsx',
    mode,
    'module': {
        'rules': [
            {
                'test': /\.(j|t)sx?$/,
                'exclude': /(node_modules|bower_components)/,
                'loader': 'babel-loader',
                'options': {
                    'cacheDirectory': true,
                },
            },
            {
                'test': /\.css$/,
                'use': ['style-loader', 'css-loader'],
            },

            {
                'test': /\.(png|jpg|gif)$/i,
                'dependency': { 'not': ['url'] },
                'type': 'asset/resource',
            },
        ],
    },
    'resolve': { 'extensions': ['*', '.js', '.jsx', '.ts', '.tsx'] },
    'output': {
        'path': path.resolve(__dirname, 'dist'),
        'filename': '[name].[contenthash].js',
    },
    'devtool': 'cheap-module-source-map',
    'devServer': {
        'contentBase': './dist',
        'port': 3000,
        'hotOnly': true,
        'open': true,
    },
    'optimization': {
        'moduleIds': 'deterministic',
        'runtimeChunk': 'single',
        'splitChunks': {
            'cacheGroups': {
                'vendor': {
                    'test': /[\\/]node_modules[\\/]/,
                    'name': 'vendors',
                    'chunks': 'all',
                },
            },
        },
    },
    'plugins': [
        new webpack.HotModuleReplacementPlugin(),
        new ForkTsCheckerWebpackPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            'template': path.resolve(__dirname, 'public', 'index.html'),
        }),
    ],
};
