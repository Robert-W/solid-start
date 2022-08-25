const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackEnvironment = require("./webpack.env");
const webpack = require("webpack");
const path = require("path");

let output = path.resolve("dist");
let publicDir = "public";

let environment = {
  BABEL_ENV: "production",
  NODE_ENV: "production",
};

module.exports = {
  target: ["es5", "web"],
  mode: "production",
  entry: {
    index: "./src/index.tsx",
  },
  output: {
    filename: "[name].[contenthash].js",
    publicPath: `${publicDir}/`,
    path: path.join(output, publicDir),
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        loader: "babel-loader",
        exclude: /(node_modules)/,
      },
      {
        test: /\.scss?/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /index\.scss$/,
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'index.[contenthash].css' }),
    new webpack.DefinePlugin(webpackEnvironment(environment)),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      inject: 'body',
      filename: path.join(output, 'index.html') 
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'common'
    }
  }
};
