const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader', // https://webpack.js.org/loaders/babel-loader/
          options: {
            // babel options : https://babeljs.io/docs/en/options
            presets: ['@babel/preset-env']
            // plugins : [...],
          },
        },
      },
      {
        /**
         * style-loader : https://webpack.js.org/loaders/style-loader/
         * css-loader : https://webpack.js.org/loaders/css-loader/
         */
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    // devServer: https://webpack.js.org/configuration/dev-server/
    contentBase: path.join(__dirname, 'public/'),
    port: 8080,
    publicPath: 'http://localhost:8080/dist/',
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};