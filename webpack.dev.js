const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackEnvironment = require("./webpack.env");
const webpack = require("webpack");
const path = require("path");

let publicDir = path.resolve(__dirname, "public");

let environment = {
  BABEL_ENV: "development",
  NODE_ENV: "development",
};

module.exports = {
  target: ["es5", "web"],
  mode: "development",
  profile: true,
  entry: {
    index: "./src/index.tsx",
  },
  output: {
    filename: "[name].bundle.js",
    path: publicDir,
    clean: true,
  },
  devtool: "inline-source-map",
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
    ],
  },
  devServer: {
    historyApiFallback: true,
    static: publicDir,
    compress: true,
    port: 4000,
  },
  plugins: [
    new webpack.DefinePlugin(webpackEnvironment(environment)),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
  ],
}
