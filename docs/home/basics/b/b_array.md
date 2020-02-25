---
title: 5. 数组
---


## 1. 创建方法

>数组长度是弹性的，可自由伸缩；
>数组下标从0开始
>数组元素可添加到对象中

**1. 空数组**

``` js
var Obj = new Array();
``` 

**2. 指定长度数组**

``` js
var Obj = new Array( Size );
``` 

**3. 指定元素数组**

``` js
var Obj = new Array( 元素1,元素2,元素3,...,元素N );
``` 

**4. 单维数组**

``` js
var Obj = [元素1,元素2,元素3,...,元素N];
``` 

**5. 多维数组**

``` js
var Obj = new Array( [数组序列1],[数组序列2],[数组序列3],...,[数组序列N] );
``` 

## 2. 数组属性

### 2.1 constructor

constructor 属性返回对象的构造函数

### 2.2 length

length 返回数组的长度

### 2.3 prototype

prototype 通过增加属性和方法扩展数组定义

## 3. 遍历数组

### 3.1 使用 for 循环

``` js
for(var i = 0;i < 5;i++){
  console.log(i)
}
// 0
// 1
// 2
// 3
// 4
``` 

### 3.2 使用 for...in


``` js
var arr = ['a','b','c'];
for(i in arr){
  console.log(arr[i])
}
// a
// b
// c
``` 

### 3.3 使用 forEach

``` js
var arr = ['a','b','c'];
arr.forEach(function(item) {
  console.log(item);
});
// a
// b
// c
``` 


## 4. 数组方法

方法|描述
--|:--:
concat()|连接两个或更多的数组，并返回结果。
join()|把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。
pop()|删除并返回数组的最后一个元素
push()|向数组的末尾添加一个或更多元素，并返回新的长度。
reverse()|颠倒数组中元素的顺序。
shift()|删除并返回数组的第一个元素
slice()|从某个已有的数组返回选定的元素
sort()|对数组的元素进行排序
splice()|删除元素，并向数组添加新元素。
toSource()|返回该对象的源代码。
toString()|把数组转换为字符串，并返回结果。
toLocaleString()|把数组转换为本地数组，并返回结果。
unshift()|向数组的开头添加一个或更多元素，并返回新的长度。
valueOf()|返回数组对象的原始值

### 4.1 concat()

连接两个或更多的数组，并返回结果。

**语法**

<code>arrayObject.concat(arrayX,arrayX,......,arrayX)</code>

**例子**

``` js
var a = [1,2,3];
var b = a.concat(4,5)
console.log(b)
// [1,2,3,4,5]
``` 


### 4.2 join()

把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。

**语法**

<code>arrayObject.join(separator)</code>

**例子**

``` js
var a = [1,2,3];
var b = a.join(",")
console.log(b)
// 1,2,3
``` 

### 4.3 pop()

删除并返回数组的最后一个元素

pop() 方法将删除 arrayObject 的最后一个元素，把数组长度减 1，并且返回它删除的元素的值。如果数组已经为空，则 pop() 不改变数组，并返回 undefined 值。

**语法**

<code>arrayObject.pop()</code>

**例子**

``` js
var a = [1,2,3];
var b = a.pop()
console.log(b)  // 3
console.log(a)  //[1,2]
``` 

### 4.4 push()

向数组的末尾添加一个或更多元素，并返回新的长度。

push() 方法可把它的参数顺序添加到 arrayObject 的尾部。它直接修改 arrayObject，而不是创建一个新的数组。push() 方法和 pop() 方法使用数组提供的先进后出栈的功能。

>PS：该方法会改变数组的长度。

**语法**

<code>arrayObject.push(newelement1,newelement2,....,newelementX)</code>

**例子**

``` js
var a = [1,2,3];
var b = a.push(4)
console.log(b)  // 4
console.log(a)  //[1,2,3,4]
``` 

### 4.5 reverse()

颠倒数组中元素的顺序。

>PS：该方法会改变原来的数组，而不会创建新的数组。

**语法**

<code>arrayObject.reverse()</code>

**例子**

``` js
var a = [1,2,3];
var b = a.reverse()
console.log(b)  // 3,2,1
console.log(a)  // 3,2,1
``` 

### 4.6 shift()

删除并返回数组的第一个元素

如果数组是空的，那么 shift() 方法将不进行任何操作，返回 undefined 值。请注意，该方法不创建新数组，而是直接修改原有的 arrayObject。

>PS：该方法会改变数组的长度。

**语法**

<code>arrayObject.shift()</code>

**例子**

``` js
var a = [1,2,3];
var b = a.shift()
console.log(b)  // 1
console.log(a)  // [2,3]
``` 

### 4.7 slice()

从某个已有的数组返回选定的元素

>PS：该方法并不会修改数组，而是返回一个子数组。如果想删除数组中的一段元素，应该使用方法 Array.splice()。<br />
>您可使用负值从数组的尾部选取元素。<br />
>如果 end 未被规定，那么 slice() 方法会选取从 start 到数组结尾的所有元素。

**语法**

<code>arrayObject.slice(start,end)</code>

**例子**

``` js
var a = [1,2,3];
var b = a.slice(1,2)
console.log(b)  // [2]
console.log(a)  // [1,2,3]
``` 

### 4.8 sort()

对数组的元素进行排序

如果调用该方法时没有使用参数，将按字母顺序对数组中的元素进行排序，说得更精确点，是按照字符编码的顺序进行排序。要实现这一点，首先应把数组的元素都转换成字符串（如有必要），以便进行比较。

**语法**

<code>arrayObject.sort(sortby)</code>

**例子**

``` js
var a = ['c','d','a','f'];
a.sort()
console.log(a)  // ["a", "c", "d", "f"]
``` 

### 4.9 splice()

删除元素，并向数组添加新元素。

splice() 方法可删除从 index 处开始的零个或多个元素，并且用参数列表中声明的一个或多个值来替换那些被删除的元素。

如果从 arrayObject 中删除了元素，则返回的是含有被删除的元素的数组。

>PS：请注意，splice() 方法与 slice() 方法的作用是不同的，splice() 方法会直接对数组进行修改。

**语法**

<code>arrayObject.splice(index,howmany,item1,.....,itemX)</code>

**例子**

``` js
var a = [1,2,3];
var b = a.splice(1,2)
console.log(b)  // [2,3]
console.log(a)  // [1]
``` 

### 4.10 toSource()

返回该对象的源代码。

该原始值由 Array 对象派生的所有对象继承。

toSource() 方法通常由 JavaScript 在后台自动调用，并不显式地出现在代码中。

**语法**

<code>object.toSource()</code>

**例子**

``` js
function employee(name,sex,born){
  this.name=name;
  this.sex=sex;
  this.born=born;
}
var bill = new employee("miluluyo","girl",1997);
document.write(bill.toSource());
//({name:"miluluyo", sex:"girl", born:1997}) 
``` 

### 4.11 toString()

把数组转换为字符串，并返回结果。

当数组用于字符串环境时，JavaScript 会调用这一方法将数组自动转换成字符串。但是在某些情况下，需要显式地调用该方法。

**语法**

<code>arrayObject.toString()</code>

**例子**

``` js
var a = [1,2,3];
var b = a.toString()
console.log(b)  // 1,2,3
console.log(a)  // [1,2,3]
``` 

### 4.12 toLocaleString()

把数组转换为本地数组，并返回结果。

首先调用每个数组元素的 toLocaleString() 方法，然后使用地区特定的分隔符把生成的字符串连接起来，形成一个字符串。

**语法**

<code>arrayObject.toLocaleString()</code>

**例子**

``` js
var a = [1,2,3];
var b = a.toLocaleString()
console.log(b)  // 1,2,3
console.log(a)  // [1,2,3]
``` 

### 4.13 unshift()

向数组的开头添加一个或更多元素，并返回新的长度。

unshift() 方法将把它的参数插入 arrayObject 的头部，并将已经存在的元素顺次地移到较高的下标处，以便留出空间。该方法的第一个参数将成为数组的新元素 0，如果还有第二个参数，它将成为新的元素 1，以此类推。

>unshift() 方法不创建新的创建，而是直接修改原有的数组。<br />
>unshift() 方法无法在 Internet Explorer 中正确地工作！

**语法**

<code>arrayObject.unshift(newelement1,newelement2,....,newelementX)</code>

**例子**

``` js
var a = [1,2,3];
var b = a.unshift(0,4,5)
console.log(b)  // 6
console.log(a)  // [0,4,5,1,2,3]
``` 

### 4.14 valueOf()

返回数组对象的原始值

该原始值由 Array 对象派生的所有对象继承。

valueOf() 方法通常由 JavaScript 在后台自动调用，并不显式地出现在代码中。

**语法**

<code>arrayObject.valueOf()</code>

**例子**

``` js
var boo = new Boolean(false)
document.write(boo.valueOf())
// false
``` 

