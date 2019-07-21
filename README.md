# 学习webpack4
> 学习 webpack 4  的一些代码和笔记

## TODO List
- [x] 1.课程介绍  
- [x] 2.webpack 基础配置
- [x] 3.webpack 打包出的文件解析
- [x] 4.Html插件
- [x] 5.样式处理（1）
- [ ] 6.样式处理（2）
- [ ] 7.转化ES6语法
- [ ] 8.处理js语法及校验
- [ ] 9.全局变量引入问题
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