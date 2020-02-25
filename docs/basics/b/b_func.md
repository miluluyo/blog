---
title: 6. 函数
---

## 1. 定义方法

**1. 静态方法**

``` js
function 函数名([虚参列表]){
  函数体;
  [return[函数返回值;]]
}
``` 

**2. 动态匿名方法**

``` js
var 函数名 = new function(["虚参列表"],"函数体")
``` 

**3. 直接量方法**

``` js
函数名 = function([虚参列表]){函数体;}
``` 

## 2. 调用方法

**2.1 直接调用**

``` js
函数名(实参列表)
``` 

**2.2 链接中调用**

``` html
<a href="javascript:函数名()">a标签</a>
``` 

**2.3 在事件中调用**

``` js
事件类型 = "函数名()"
``` 

**2.4 递归调用**

在函数体内部调用函数自身

``` js
function 函数名(){
  代码
  函数名();
}
``` 

## 3.方法

### apply

将函数作为对象的方法来调用，将参数以数组形式传递给该方法

**语法**

<code>function.apply(thisObj,[arg1,arg2,....argN])</code>




### call

将函数作为对象的方法来调用，将指定参数传递给该方法

**语法**

<code>function.call(thisObj, arg1,arg2,...argN)</code>



``` js
var foo = {
  value: 1
};
function bar() {
  console.log(this.value);
}
bar.call(foo); // 1
//call 改变了 this 的指向，指向到 foo
//bar 函数执行了
``` 

### toString

返回函数的字符串表示

## 4. arguments 对象

arguments是一个对应于传递给函数的参数的类数组对象。

arguments对象是所有（非箭头）函数中都可用的局部变量。

**属性**

**4.1 length**

获取函数实参的长度

**4.2 arguments.callee**

返回当前正在指向的函数

>严格模式下，无法使用。

``` js
function test() {
  console.log(arguments.callee) 
}
test();  //fn test
```

**4.3 caler**

返回调用当前正在执行函数的函数名

## 5. 函数参数

**参数类型**

**5.1 形参**

定义函数时使用的参数，接收调用该函数时传递的参数

**5.2 实参**

调用函数时传递给函数的实际参数

**特性**

1. 参数个数没有限制；

**实参 < 形参：** 多余形参 = undefined

**实参 > 形参：** 多余形参被忽略

2. 参数的数据类型没有限制；

3. 通过 arguments 对象访问参数数组

4. 参数始终按值传递

**基本类型：**传值

**引用类型：**传址

## 6. 指针标识

### 6.1 this

指向当前操作对象

### 6.2 callee

指向参数集合所属函数

### 6.3 prototype

指向函数附带的原型对象

### 6.4 constructor

指向创建该对象的构造函数

## 7. 箭头函数 （ES6）

**和普通函数的区别**
1. 不绑定this,arguments
2. 更简化的代码语法。

>不绑定this
>>箭头函数的 this 始终未定义的 this 

>不绑定arguments
>>如果你在箭头函数中使用arguments参数不能得到想要的内容。

``` js
function(){
    console.log('hello')
}
//写成箭头函数后如下：
()=> conosle.log('hello')
```

## 8. 闭包

JavaScript 变量属于本地或全局作用域。

全局变量能够通过闭包实现局部（私有）。

闭包是一种保护私有变量的机制，在函数执行时形成私有的作用域，保护里面的私有变量不受外界干扰。

直观的说就是形成一个不销毁的栈环境。

``` js
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

console.log(add());  // 1
console.log(add());  // 2
console.log(add());  // 3
```

变量 add 的赋值是自调用函数的返回值。

这个自调用函数只运行一次。它设置计数器为零（0），并返回函数表达式。

这样 add 成为了函数。最“精彩的”部分是它能够访问父作用域中的计数器。

这被称为 JavaScript 闭包。它使函数拥有“私有”变量成为可能。

计数器被这个匿名函数的作用域保护，并且只能使用 add 函数来修改。

闭包指的是有权访问父作用域的函数，即使在父函数关闭之后。
