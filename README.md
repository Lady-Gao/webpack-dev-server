## 配置webpack
>`package.json`

```js
"dependencies": {
    "webpack": "^4.16.5",
    "webpack-cli": "^3.1.0"
  }
```


>`webpack.config.js`

```js
const path = require('path');

module.exports = {
mode:'development',//开发模式development/生产模式production
  entry: './src.index.js',//入口文件
  output: { //出口文件
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
     {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader",

    }
    ]
  }
};
};

```



## 配置webpack热更新
>`package.json`

```js
scripts: {
    "server": "webpack-dev-server --open"
  },
dependencies: {
    "webpack": "^4.16.5",
    "webpack-cli": "^3.1.0",
    "html-webpack-plugin": "^3.2.0",
    "webpack-dev-server": "^3.1.5"
  }
```
>`webpack.config.js`

```js
const HtmlwebpackPlugin = require('html-webpack-plugin');

 
 plugins: [
     new HtmlwebpackPlugin({
       template: 'index.html'
     })
   ]
```

## 配置postcss
#### postcss- px-to-viewport
>`package.json`

```js
dependencies: {
    "css-loader": "^1.0.0",
    "postcss-loader": "^3.0.0",
    "postcss-px-to-viewport": "^0.0.3",
    "style-loader": "^0.22.1",
 }
```


> `webpack.config.js`

```js
 
   module: {
     rules: [
       {
         test: /\.css$/,
         use: [ 'style-loader' ,'css-loader','postcss-loader']//引用插件
       }
     ]
   }
```

>`.postcssrc.js`

```js
//默认读取的JS文件
module.exports = {
    plugins: [
        require('postcss-px-to-viewport')({
            viewportWidth: 750,
            viewportHeight: 1334,
            unitPrecision: 5,
            viewportUnit: 'vw',
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false
        })
    ]
}
```
>`index.js`

```js
require("./index.css") 
```


