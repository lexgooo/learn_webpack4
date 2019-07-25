# 学习webpack4
> 学习 webpack 4  的一些代码和笔记

## TODO List
- [x] 1.课程介绍  
- [x] 2.webpack 基础配置
- [x] 3.webpack 打包出的文件解析
- [x] 4.Html插件
- [x] 5.样式处理（1）
- [x] 6.样式处理（2）
    - [x] 抽离 css 文件
    - [ ] 自动添加样式前缀(没成功)
    - [x] 压缩 css 资源（需要把模式设为 `production`）
    - [x] 压缩 js 资源(报错)  
    ```bash
    ERROR in bundle.5c5ec55a.js from UglifyJs
    Unexpected token: name «str», expected: punc «;» [./src/index.js:1,0][bundle.5c5ec55a.js:91,4]
    ```
- [x] 7.转化ES6语法
- [x] 8.处理js语法及校验
- [x] 9.全局变量引入问题
- [ ] 10.图片处理
- [ ] 11.打包文件分类
- [ ] 12.打包多页应用
- [ ] 13.配置source-map
- [ ] 14.watch的用法
- [ ] 15.webpack小插件应用
- [ ] 16.webpack跨域问题
- [ ] 17.resolve属性的配置
- [ ] 18.定义环境变量
- [ ] 19.区分不同环境
- [ ] 20.noParse
- [ ] 21.IgnorePlugin
- [ ] 22.dllPlugin
- [ ] 23.happypack
- [ ] 24.webpack自带优化
- [ ] 25.抽离公共代码
- [ ] 26.懒加载
- [ ] 27.热更新
- [ ] 28.tapable介绍
- [ ] 29.tapable
- [ ] 30.AsyncParralleHook
- [ ] 31.AsyncSeriesHook
- [ ] 32.AsyncSeriesWaterfall
- [ ] 33.webpack手写
- [ ] 34.webpack分析及处理
- [ ] 35.创建依赖关系
- [ ] 36.AST递归解析
- [ ] 37.生成打包结果
- [ ] 38.增加loader
- [ ] 39.增加plugins
- [ ] 40.loader
- [ ] 41.loader配置
- [ ] 42.babel-loader实现
- [ ] 43.banner-loader实现
- [ ] 44.实现file-loader和url-loader
- [ ] 45.less-loader和css-loader
- [ ] 46.css-loader
- [ ] 48.webpack中的插件
- [ ] 49.文件列表插件
- [ ] 50.内联webpack插件
- [ ] 51.打包后自动发布

## 课程笔记

### webpack 安装
- 安装本地 webpack
- webpack, webpack-cli, -D

### webpack 可以进行 0 配置
- 打包工具 -> 输出后的结果（js模块）
- 打包（支持 js 的模块化）

### 手动配置 webpack
- 默认配置文件的名字 webpack.config.js 
- mode 分为 production 和 development

### 本地服务
- 本地服务: webapck-dev-server
- html插件: html-webpack-plugin
- html-webpack-plugin 里的 `hash` 是在`.js`后面的，而 `output` 配置里面的 `hash` 可以自己指定位置，比较灵活
- `production` 和 `development` 两个模式的区别是，是否对打包的 js 文件进行
- `loader` 加载顺序，是从下到上，从右到左
- `css-loader` 是用来转化 css 模块的，就是把 css 代码从 css 文件中提取出来，`style-loader` 是用来把提取出的样式加到 html 模板文件中。
- 把 css 抽离为单独文件的插件 `mini-css-extract-plugin`
- 自动添加样式前缀 loader `postcss-loader` `autoprefixer`
- 优化压缩 css 资源插件 `optimize-css-assets-webpack-plugin`
- 优化压缩 js 资源插件 `uglifyjs-webpack-plugin`
- 转化 es6 `babel-loader`(转化加载器), `@babel/core`(babel核心模块) `@babel/preset-env`

### 处理高级语法
- es6 代码运行时依赖 `@babel/plugin-transform-runtime` (开发依赖) `@babel/runtime` (生产依赖)
- es6 高级语法支持 `@babel/polyfill` (生产依赖)
- js 语法校验 `eslint`， `eslint-loader`

### 全局变量引入
- 暴露全局变量 `expose-loader` (内联 loader)
- `pre` 前端执行的loader  
- `normal` 普通 loader
- 内联 loader
- `post` 后置loader

### 引入全局 jquery 的方式
- `expose-loader` 暴露到 window 上
- `providePlugin` 给每个人提供一个 `$`
- 引入不打包

### 图片处理
 - 图片引入方式
    - 在 js 中创建图片来引入
    - 在 css 中引入 background: url()
    - 在 img 标签中引入 ` <img src="">`

- `file-loader` 默认会在内部生成一张图片到 `build` 目录下。
- 把生成的图片名字返回回来 
- `html-withimg-loader` 把 html 中的图片路径转成有用的路径
- `url-loader` 解析文件路径，可以配置图片小于多少 k 使用 base64 来显示