const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require('webpack');
const env = process.env.NODE_ENV;

module.exports = {
  entry: {
    vendor: ["vue"],
    about: "./src/assets/scripts/about.js",
    auth: "./src/assets/scripts/auth.js",
    works: "./src/assets/scripts/works.js"
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity
    })
  ],
  resolve: {
    alias: {
      vue$: env === 'development' ? "vue/dist/vue.esm.js" : "vue/dist/vue.min.js"
    }
  },
  devtool: env === 'development' ? "#eval-source-map" : ''
};
