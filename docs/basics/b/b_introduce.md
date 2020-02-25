---
title: 0. 简介
---

## 0. 简介

  JavaScript 对网页行为进行编程

  javascript 是脚本语言，是一种轻量级的编程语言

  JavaScript 是动态类型语言，而 Java 是静态类型语言

  JavaScript 是弱类型的，Java 属于强类型

## 1. 命名规范

  - 区分大小写

  - 第一个字符必须是一个字母、下划线（_）或一个美元符号（$）;其他字符可以是字母、下划线、美元符号或数字

  - 不能含有空格和其他标点符号。

  - 不能以关键字或保留字命名

## 2.书写规范

  1. 缩进的最小单位是4个空格

  2. 所有的变量应该在使用前声明

  3. 命名应该由26个大小写字母(A .. Z, a .. z)，10个数字(0 .. 9)和_(下划线)组成。不要在名字里使用$(美元符号)或\(反斜线符号)。

## 3. 使用

  1、JavaScript 代码必须位于 < script > 与 </ script > 标签之间。

``` html
<script>
  document.getElementById("demo").innerHTML = "我的第一段 JavaScript";
</script>
``` 

  2、JavaScript 文件放置外部脚本引用。

``` html
<script src="myScript.js"></script>
``` 

>外部 JavaScript 的优势:
>>1、分离了 HTML 和代码<br/>
>>2、使 HTML 和 JavaScript 更易于阅读和维护<br/>
>>3、已缓存的 JavaScript 文件可加速页面加载

## 4. 注释

> //	单行注释 <br/>
> /*   */	多行注释





## 5. 输出

<el-divider content-position="left">输出</el-divider>
代码|详解
-|-|-
window.alert()|【弹出警告框】
document.write()|【将内容写到HTML文档中】
innerHTML|【写入到HTML中】
console.log()|【写入到浏览器控制台】

> 附（PS：console有很多有意思的玩法） <br/>
> console.log('文字信息'); <br/>
> console.info('提示信息'); <br/>
> console.warn('警告信息'); <br/>
> console.error('错误信息'); 

<el-divider content-position="left">语句标识符（关键词）</el-divider>
关键词|详解
-|-|-
break|用于跳出循环。
catch|语句块，在 try 语句块执行出错时执行 catch 语句块。
continue|跳过循环中的一个迭代。
do ... while|执行一个语句块，在条件语句为 true 时继续执行该语句块。
for|在条件语句为 true 时，可以将代码块执行指定的次数。
for ... in|用于遍历数组或者对象的属性（对数组或者对象的属性进行循环操作）。
function|定义一个函数
if ... else|用于基于不同的条件来执行不同的动作。
return|退出函数
switch|用于基于不同的条件来执行不同的动作。
throw|抛出（生成）错误 。
try|实现错误处理，与 catch 一同使用。
var|声明一个变量。
while|当条件语句为 true 时，执行语句块。
