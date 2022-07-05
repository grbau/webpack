const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");



module.exports = {
  mode: "development",
  entry: {
    main: './src/index.js',
    'global': './src/sass/main.scss',
    'productDetails': './src/sass/pages/product/productDetails.scss',
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      /*{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },*/
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ],
      },
      /*{
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
     {
       test: /\.(csv|tsv)$/i,
       use: ['csv-loader'],
     },
     {
       test: /\.xml$/i,
       use: ['xml-loader'],
     },*/
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
    new FixStyleOnlyEntriesPlugin(),
  ],
  devServer: {
    static: './dist',
  },
  
};