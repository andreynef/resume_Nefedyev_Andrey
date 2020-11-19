const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const GLOBAL_CSS_REGEXP = /\.global\.css$/;

let conf = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      // babel
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
          }
        }
      },
      // css
      {
        test: /\.css$/,
        use: [
          'style-loader',//style
          {
            loader: 'css-loader',
            options: {
              modules: {//все css файлы воспринимаются как модули
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',//маркировка названий сгенерированных стилей
              }
            }
          },
        ],
        exclude: GLOBAL_CSS_REGEXP // все css кроме GLOBAL_CSS_REGEXP (= main.global.css в папке src). Их обработка б отдельным обычн способом, ниже.
      },
      {
        test: GLOBAL_CSS_REGEXP,// матчить только их. И тжсм сделать в серверной чести но без style
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
    hot: true,
  },
  plugins: [
    new CleanWebpackPlugin(),//чистка старья/перезапись папки build
    new HtmlWebpackPlugin({// перезапись html в папку build
      template: './src/index.html',//копия с шаблона
      favicon: './src/icon/favicon.png'//вставляет в head
    }),
  ],
  output: {
    filename: 'index_bundle.js',
    path: path.join(__dirname, 'build'),
  },
};

module.exports = conf;