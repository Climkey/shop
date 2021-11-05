# 云商城电商购物系统（移动端）

## 参考原型：

[电商购物前台系统](https://www.pmdaniu.com/storages/125942/c39742603879f35a5a3ff169829cb99e-4387/start.html#g=1&p=%E5%8E%9F%E5%9E%8B%E8%AF%B4%E6%98%8E)

## 实现功能

- 首页
- 登录
- 分类
- 详情
- 购物车
- 确认订单
- 个人中心

  
- ......

## 技术栈

vue CLI + vue.js + vue-router + vuex + axios + vant + ES6+

## 项目目录结构

```bash
├── dist                       # 构建相关
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 全局公用组件
│   ├── directives             # 全局指令
│   ├── filters                # 全局 filter
│   ├── router                 # 路由
│   ├── store                  # 全局 store管理
│   ├── utils                  # 全局公用辅助方法
│   ├── views                  # views 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
├── .eslintrc.js               # eslint 配置项
├── babel.config.js            # babel-loader 配置
├── vue.config.js              # vue-cli 配置
└── package.json               # package.json
```

### ESLint 规范

```js
// .eslintrc.js
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline']
  }
}
```

### 项目 REM 适配

```bash
$ npm i postcss-pxtorem@5 -D
```

```js
// ./utils/flexible.js
(function flexible(window, document) {
  var docEl = document.documentElement
  var dpr = window.devicePixelRatio || 1

  // adjust body font size
  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = 16 + 'px'
    } else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize()

  // set 1rem = viewWidth / 10
  function setRemUnit() {
    var rem = docEl.clientWidth / 10
    docEl.style.fontSize = rem + 'px'
  }

  setRemUnit()

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function(e) {
    if (e.persisted) {
      setRemUnit()
    }
  })

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
}(window, document))
```

```js
// main.js
import './utils/flexible.js'
```

```js
// vue.config.js
const pxtorem = require('postcss-pxtorem')

/**
 * webpack 相关扩展配置
 */
module.exports = {
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          pxtorem({
            rootValue: 75,
            propList: ['*', '!font*'],
            exclude: 'vant',
          }),
        ],
      },
    },
  },
}
```






## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

