---
title: 9. DOM 基本操作
---
## 0. DOM

通过 HTML DOM，可访问 JavaScript HTML 文档的所有元素。

HTML DOM (文档对象模型)
当网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model）。

## 1. 获取节点

### document

编码|语法
-|-|
getElementById|document.getElementById(元素ID)
getElementByName|document.getElementByName(元素name)
getElementByTagName|document.getElementByTagName(元素标签)

### 节点指针

编码|语法|功能
-|-|-|
firstChild|父节点.firstChild|获取元素的首个子节点
lastChild|父节点.lastChild|获取元素的最后一个子节点
childNodes|父节点.childNodes|获取元素的子节点列表
previousSibling|兄弟节点.previousSibling|获取已知节点的前一个节点
nextSibling|兄弟节点.nextSibling|获取已知节点的后一个节点
parentNode|子节点.parentNode|获取已知节点的父节点

## 2. 节点操作

### 创建节点

编码|语法|功能
-|-|-|
createElement|document.createElement(元素标签)|创建元素节点
createAttribute|document.createAttribute(元素属性)|创建属性节点
createTextNode|document.createTextNode(文本内容)|创建文本节点

### 插入节点

编码|语法|功能
-|-|-|
appendChild|appendChild(所添加的新节点)|向节点的子节点列表的末尾添加新的子节点
insertBefore|insertBefore(所要添加的新节点，已知子节点)|在已知的子节点前插入一个新的子节点

### 替换节点

编码|语法|功能
-|-|-|
replaceChild|replaceChild(要插入的新元素，将被替换的老元素)|将某个子节点替换为另一个

### 复制节点

编码|语法|功能
-|-|-|
choneNode|需要被复制的节点.cloneNode(true/false)|创建指定节点的副本

>true ：复制当前节点及其所有子节点<br/>
>false：仅复制当前节点

### 删除节点

编码|语法|功能
-|-|-|
removeChild|removeChild(要删除的节点)|删除指定的节点

## 3. 属性操作

### 获取属性

编码|语法|功能
-|-|-|
getAttribute|元素节点.getAttribute(元素属性名)|获取元素节点中指定属性的属性值

### 设置属性

编码|语法|功能
-|-|-|
setAttribute|元素节点.setAttribute(属性名,属性值)|创建或改变元素节点的属性

### 删除属性

编码|语法|功能
-|-|-|
removeAttribute|元素节点.removeAttribute(属性名)|删除元素中的指定属性

## 4. 文本操作

编码|功能
-|-|
insertData(offset,String)|从offset指定的位置插入string
appendData(string)|将string插入到文本节点的末尾处
deleteDate(offset,count)|从offset起删除count个字符
replaceData(off,count,string)|从off将count个字符用string替代
splitData(offset)|从offset起将文本节点分成两个节点
substring(offset,count)|返回由offset起的count个节点

