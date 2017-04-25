var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var extractPlugin = new ExtractTextPlugin({
  filename: 'main.css'
});

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname ,  'dist')
  },
  module: {
    rules: [
      {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        query: {
              presets: ['es2015', 'react']
           },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: extractPlugin.extract({
          use:['css-loader','sass-loader']
        })
      },
      {
                  test: /\.(jpe?g|png|gif|svg)$/i,
                  use: [
                         {
                           loader: 'file-loader',
                           options: {
                               name:'[name].[ext]',
                               outputPath: 'img/'
                           }
                         }]

              }
    ]
  },
  plugins: [
    extractPlugin

//     new webpack.DefinePlugin({
//   'process.env': {
//     NODE_ENV: JSON.stringify('production')
//   }
// }),
//     new webpack.optimize.UglifyJsPlugin({
//     compress: {
//         warnings: false
//     }
// })
  ],
  externals: {
  'Config': JSON.stringify({
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    AUTH_CLIENT_ID: process.env.AUTH_CLIENT_ID,
    AUTH_CLIENT_SECRET: '123'
  })
}
// devtool: 'cheap-module-eval-source-map'
}
