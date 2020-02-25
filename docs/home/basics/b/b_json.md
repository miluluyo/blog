---
title: 12. JSON
---

## 1. JSON

* JSON 指的是 JavaScript 对象标记法（JavaScript Object Notation）
* JSON 是一种轻量级的数据交换格式
* JSON 具有自我描述性且易于理解
* JSON 独立于语言*

JSON 是存储和传输数据的格式。

JSON 经常在数据从服务器发送到网页时使用

**交换数据**

当数据在浏览器与服务器之间进行交换时，这些数据只能是文本。

JSON 属于文本，并且我们能够把任何 JavaScript 对象转换为 JSON，然后将 JSON 发送到服务器。

我们也能把从服务器接收到的任何 JSON 转换为 JavaScript 对象。

以这样的方式，我们能够把数据作为 JavaScript 对象来处理，无需复杂的解析和转译。

### JSON.parse()

JSON 格式写的字符串转换为原生 JavaScript 对象

``` js
JSON.parse()  
``` 

### JSON.stringify()

JSON.stringify() 把 JavaScript 对象转换为字符串。

``` js
var obj = { name:"麋鹿鲁哟", age:22};
JSON.stringify(obj)  
``` 

## 2. JSONP

JSONP 是一种无需考虑跨域问题即可传送 JSON 数据的方法。

JSONP 不使用 XMLHttpRequest 对象。

JSONP 使用 `<script>` 标签取而代之。

**简介**
JSONP 指的是 JSON with Padding。

从另一个域请求文件会引起问题，由于跨域政策。

从另一个域请求外部脚本没有这个问题。

JSONP 利用了这个优势，并使用 script 标签替代 XMLHttpRequest 对象。

就是利用script标签绕过同源策略，获得一个类似这样的数据，jsonpcallback是页面存在的回调方法，参数就是想得到的json。

>它只支持GET请求而不支持POST等其它类型的HTTP请求；它只支持跨域HTTP请求这种情况，不能解决不同域的两个页面之间如何进行JavaScript调用的问题
