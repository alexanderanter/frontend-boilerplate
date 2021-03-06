const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  DIST: path.resolve(__dirname, './dist'),
  JS: path.resolve(__dirname, './app'),
  SRC: path.resolve(__dirname, './app')
};

module.exports = {
  entry: path.join(paths.JS, 'index.js'),
  mode: 'development',
  output: {
    path: paths.DIST,
    filename: 'index.js'
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html')
    })
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  module: {
    // apply rules to files that meet given conditions
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, '/'),
        exclude: /(node_modules|bower_compontents)/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /(node_modules|bower_compontents)/
      }
    ]
  },

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
