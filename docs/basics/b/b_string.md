---
title: 7. 字符串函数
---

## 1. 查找方法

### 1.1 字符串方法

**chartAt()**

chartAt() 返回字符串中第N个字符

**chartCodeAt()**

chartCodeAt() 返回字符串中第N个字符的代码

**fromCharCode()**

fromCharCode() 根据字符编码创建字符串


>**关系**<br/>

>>charAt与charCodeAt共性：根据下标查找指定字符<br/>
>>charCodeAt与fromCharCode:互为反向操作

### 1.2 位置方法

**indexOf()**

indexOf() 从前向后检索字符串，看其是否含有指定字符串

**lastIndexOf()**

从后向前检索字符串，看其是否含有指定字符串

### 1.3 匹配方法

**match()**

match()找到一个或多个正则表达式的匹配

**search()**

search()检索字符串中与正则表达式匹配的字符串

**replace()**

replace()替换一个与正则表达式匹配的字符串

**split()**

split()根据指定分隔符将字符串分割成多个字符串，并返回数组

## 2. 操作方法

### 2.1 拼接方法

**concat()**

将指定字符串连接到此字符串的结尾

**语法**

<code>string.concat(value..)</code>

``` js
String str = "abc";
str = str.concat("123");
System.out.println(str);//abc123
``` 

### 2.2 获取方法

>**根据下标截取字符串**
>>
>>**slice()**
>>
>>slice()与字符长度相加
>>
>>**substring()**
>>
>>substring()转换为0
>**根据长度截取字符串**
>>**substr()**
>>substr()返回字符的个数

### 2.3 空格处理

**trim** 清除前置及后缀空格

**timLeft** 清除前置空格

**trimRight** 清除后缀空格

### 2.4 比较方法

localCompare() 用本地特定顺序比较两个字符串

## 3. 编码方法

**字符串常规编码与解码**
escape()、unescape()

**URI字符串编码与解码**
encodeURI()、decodeURI()

## 4. 转换方法

### 4.1 大小写转换

**转为大写**
toUpperCase()、toLocaleUpperCase()

**转为小写**
toLowerCase()、toLocaleLowerCase()

**URI组件编码与解码**
encodeURIComponent()、decodeURIComponent()

