## 目录结构
* dist - 静态资源输出目录(最后输出页面的目录)
* templates - 各类服务器端模版(入口页面)
* vendor - 没有通过npm管理的第三方代码
* src/pages - 真正的页面内容包括html/js/css,一个页面对应一个文件夹
* src/common - 公共代码
* src/components - 公共组件(弹窗、提示框之类)
* src/module - 项目组件(chart组件,公用的页头、页尾)
* src/partial - 单页应用的分页(路由页面)index.html直接访问

mock 数据在 src/pages/*/mock 文件夹内部

请求地址配置在 src/common/utils.js里



# fivebuild
最简化的基于webpack和Vue.js前端脚手架

环境

Node.js 4.x, 更新的版本会有问题, 主要sass编译, 用nvm切换node版本

全局安装两个node包
｀npm install webpack -g｀
｀npm install node-sass -g｀

支持以下功能

* ES6转译
* SASS预处理
* Cortex包支持
* AutoPrefixer自动处理浏览器前缀
* 根据模版生成入口文件
* 图片处理: CSS & HTML, 对于小于10kb, 直接作为base64嵌入, 否则通过url加载
* ESLint代码静态分析
* 服务器端接口Mock

## 构建

`npm install`

`npm run build`

## 调试

`npm run dev`

访问http://localhost:5002/[pageName].html

比如
* http://localhost:5002/index.html

## 发布

不用本地构建，直接发布
1.  git commit and push
