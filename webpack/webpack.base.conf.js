const path = require('path')
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


const PATHS = {
  src: path.join(__dirname, '../src'),
  web: path.join(__dirname, '../web')
}

const PAGES_DIR = `${PATHS.src}/html`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.html'))

module.exports = {
  externals: {
    paths: PATHS
  },
  entry: {
    // module: ['@babel/polyfill', `${PATHS.src}/js/your-module.js`],
    common: ['@babel/polyfill', `${PATHS.src}/js/common.js`], // general js
    home: ['@babel/polyfill', `${PATHS.src}/js/home.js`],
    news: ['@babel/polyfill', `${PATHS.src}/js/news.js`],
    choose_colors: ['@babel/polyfill', `${PATHS.src}/js/choose_colors.js`]
  },
  output: {
    path: PATHS.web,
    filename: `js/[name].[chunkhash].js`,
    publicPath: '/'
  },
  resolve: {
    alias: {
      '@': PATHS.src,
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
      },
      {
        test: /\.(jpe?g|png|svg|webp|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.((c|sa|sc)ss)$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: `./postcss.config.js` } }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      },
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        },
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `css/[name].[contenthash].css`,
    }),

    new CopyWebpackPlugin([
      { from: `${PATHS.src}/img`, to: `img` },
      { from: `${PATHS.src}/static`, to: 'static' }
    ]),

    ...PAGES.map(
      page =>
      new HtmlWebpackPlugin({
        hash: false,
        template: `${PAGES_DIR}/${page}`,
        filename: `${page}`,
        title: `${page}`,
        inject: false,
      })
    )
  ]
}
