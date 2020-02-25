---
title: 0. 序言及简介
---

## 0. 序言

我觉得吧，ES6 还是看 阮一峰 大大的 [ECMAScript6 入门](https://es6.ruanyifeng.com/) 比较完善

在此，只是个人怕看看不下去然后码出来一遍给自己看的，所以要学习的话，请直接学习 [ECMAScript6 入门](https://es6.ruanyifeng.com/)

## 1. 简介

**ECMAScript 和 JavaScript 的关系**

ECMScript是Javascript的规格，Javscript是ECMScript的一种实现

**浏览器对ES6的支持 [点此查看](https://kangax.github.io/compat-table/es6/)**

## 2. 转码

### 1. Babel 转码器

ES6转码器，可以将ES6代码转为ES5代码，从而在现有环境中执行。Babel 的配置文件是.babelrc，存放在项目的根目录下。该文件用来设置转码规则和插件，基本格式如使用示例。注意，以下所有 Babel 工具和模块的使用，都必须先写好.babelrc。

**下载**

``` bash
$ npm install --save-dev @babel/core
```

按需下载

**最新转码规则**

``` bash
$ npm install --save-dev @babel/preset-env
```

**react 转码规则**

``` bash
$ npm install --save-dev @babel/preset-react
```

**使用**

``` js
{
  "presets": [],
  "plugins": []
}
```

Babel也可以用于浏览器环境

### 2. Traceur 转码器

Traceur 允许将 ES6 代码直接插入网页，首先，必须在网页头部加载 Traceur 库文件。

**直接插入网页**

``` html
<script src="https://google.github.io/traceur-compiler/bin/traceur.js"></script>
<script src="https://google.github.io/traceur-compiler/bin/BrowserSystem.js"></script>
<script src="https://google.github.io/traceur-compiler/src/bootstrap.js"></script>
<script type="module">
  import './Greeter.js';
</script>
```

>上面代码中，一共有 4 个script标签。<br/>
>第一个是加载 Traceur 的库文件<br/>
>第二个和第三个是将这个库文件用于浏览器环境<br/>
>第四个则是加载用户脚本，这个脚本里面可以使用 ES6 代码

**在线转换**

Traceur 提供了一个[在线编译器](http://google.github.io/traceur-compiler/demo/repl.html#)

**命令行转换**

Traceur 是一个 Node 的模块，首先需要用 npm 安装。

``` bash
$ npm install -g traceur
```

Traceur 直接运行 ES6 脚本文件，会在标准输出显示运行结果，以前面的calc.js为例。

``` bash
$ traceur calc.js
Calc constructor
9
```

如果要将 ES6 脚本转为 ES5 保存，要采用下面的写法。

``` bash
$ traceur --script calc.es6.js --out calc.es5.js
```

上面代码的--script选项表示指定输入文件，--out选项表示指定输出文件。

为了防止有些特性编译不成功，最好加上--experimental选项。

``` bash
$ traceur --script calc.es6.js --out calc.es5.js --experimental
```

命令行下转换生成的文件，就可以直接放到浏览器中运行。
