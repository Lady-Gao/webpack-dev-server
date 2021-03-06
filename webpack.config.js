const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
   module: {
     rules: [
       {
         test: /\.css$/,
         use: [ 'style-loader' ,'css-loader','postcss-loader']
       }
     ]
   },
   devServer: {
    
   },
   plugins: [
     new HtmlwebpackPlugin({
       template: 'index.html'
     }),
   ]
};