---
title: 2. 数据类型
---

## 1. 数据类型

JavaScript 的数据类型，共有 **七** 种（其中 Symbol 是ES6新增），分为“基本类型”和“引用类型”

**基本类型：** 字符串(String)、数字(Number)、布尔(Boolean)、数组(Array)、空(Null)、未定义(Undefined)

**引用类型：** 对象(Object)

**原始类型：** 符号(Symbol)

null 和 undefined 通常被认为是特殊值，这两种类型的值唯一，就是其本身。

数据类型|说明
--|:--:|--:
字符串（String）|使用双引号 " 或单引号 ' 括起来的一个或多个字符
数字(Number)|包括整数和浮点数（包含小数点的数或科学记数法的数）
布尔(Boolean)|表示 true 或 false 这两种状态
空（Null）|变量或内容值为空（null），可以通过给一个变量赋 null 值来清除变量的内容
未定义（Undefined）|变量被创建后，未给该变量赋值，该类型只有一个取值：undefined
数组(Array)|var cars=new Array();
对象(Object)|JavaScript 操作的对象
符号(Symbol)|Symbol 值通过Symbol函数生成。凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。（PS：Symbol函数前不能使用new命令，否则会报错。）

## 2. js弱类型语言

**JavaScript 拥有动态类型，这意味着相同的变量可用作不同的类型**

**js是弱类型语言**，不重视类型的定义，但js会根据为变量赋值的情况自定判断该变量是何种类型。

## 3. 数据类型转换

JavaScript 拥有动态类型，可以不需要指定数据类型，在执行时会自动转换

JavaScript 变量可以转换为新变量或其他数据类型：
- 通过使用 JavaScript 函数
- 通过 JavaScript 自身自动转换


Number() 转换为数字， String() 转换为字符串， Boolean() 转化为布尔值。

## 4.数据类型判断

### 4.1 typeof 操作符

typeof 操作符用来检测变量的数据类型。

1. 写法

  - typeof() 括号

  - typeof object 中间加空格

2. 返回的数据类型

  - number
  - string
  - boolean
  - object
  - undefined
  - function
  - Symbols

### 4.2 instanceof

instanceof 其实适合用于判断自定义的类实例对象, 而不是用来判断原生的数据类型

``` js
function judgeType2 (obj) {
  if (obj === null) return "null";
  if (obj instanceof Array)  return "array";
  return (typeof obj);
} 
judgeType2("123")   // "string"
```

### 4.3 Object.prototype.toString.call()

使用 Object.prototype.toString.call() 方法, 可以获取到变量的准确的类型.

``` js
console.log(Object.prototype.toString.call('asd'));  // [object String]
```

## 5. null、undefined、NaN

**1. null**

null 表示“空值”，代表一个空对象指针，使用typeof运算得到 “object”，所以你可以认为它是一个特殊的对象值。

**2. undefined**

undefined 表示“未定义”，可以把undefined看作是空的变量。

**3. NaN**

NaN，即非数字值，是一个特殊的数值，属于Number类型。

**NaN的特点:**
1. 任何设计NaN的操作都会返回NaN，这个特点在多步计算中有可能导致问题。
2. NaN与任何值都不相等，包括其本身。

> ps：针对NaN的这两个特点，ECMAScript定义了isNaN() 函数。



