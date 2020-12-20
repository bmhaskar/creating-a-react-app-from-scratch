const path = require("path");
const webpack = require("webpack");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
        }        
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      
      {
        test: /\.(png|jpg|gif)$/i,
        dependency: { not: ['url'] }, 
        type: 'asset/resource'
      },
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx",".ts", ".tsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devtool:"cheap-module-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), 
    new ForkTsCheckerWebpackPlugin()
  ]
};
