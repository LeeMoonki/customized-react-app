const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const IS_DEV_SERVER = process.argv[1].indexOf('webpack-dev-server') >= 0;

function getFilename(name) {
  // https://github.com/webpack/webpack-dev-server/issues/438
  return `[name].${IS_DEV_SERVER ? name : '[hash]'}.js`;
}

/**
 * Configuration on different mode
 * 1. Configuration Types: https://webpack.js.org/configuration/configuration-types/
 * 2. Production: https://webpack.js.org/guides/production/
 */

module.exports = function (env, argv) {
  const IS_DEV_MODE = argv.mode !== 'production';

  return {
    mode: IS_DEV_MODE ? 'development' : 'production',
    entry: './src/index.js', // If a string or array of strings is passed, the chunk is named 'main'.
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: env.local ? './' : '/dist/',
      filename: getFilename('bundle'), // when creating multiple bundles via more than one entry point, code splitting, or various plugins, you should use not a static name.
      chunkFilename: '[name].[hash].chunk.js',
    },
    module: {
      // use loaders on a rule: https://webpack.js.org/concepts/loaders/#configuration
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader', // https://webpack.js.org/loaders/babel-loader/
            options: {
              // babel options : https://babeljs.io/docs/en/options
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['react-hot-loader/babel', '@babel/plugin-syntax-dynamic-import']
            },
          },
        },
        {
          /**
           * mini-css-extract-plugin : https://webpack.js.org/plugins/mini-css-extract-plugin/
           * style-loader : https://webpack.js.org/loaders/style-loader/
           * css-loader : https://webpack.js.org/loaders/css-loader/
           * sass-loader : https://webpack.js.org/loaders/sass-loader/
           */
          test: /\.(s[ac]|c)ss$/i,
          use: [
            IS_DEV_MODE ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ],
          exclude: /\.module\.(s[ac]|c)ss$/
        },
        {
          // https://blog.jakoblind.no/css-modules-webpack/
          test: /\.(s[ac]|c)ss$/i,
          use: [
            IS_DEV_MODE ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            },
            { loader: 'sass-loader' },
          ],
          include: /\.module\.(s[ac]|c)ss$/
        }
      ]
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        'Components': path.resolve(__dirname, 'src/components/'),
        'Css': path.resolve(__dirname, 'src/css')
      },
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
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        // https://github.com/jantimon/html-webpack-plugin
        // https://github.com/jaketrent/html-webpack-template
        meta: {
          viewport: 'width=device-width, initial-scale=1'
        },
        template: 'src/index.template.ejs',
        title: 'React'
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css'
      })
    ]
  };
};
