---
title: 11. JS 对象
---

## 1. javascript 对象

JavaScript 中的所有事物都是对象：字符串、数字、数组、日期，等等。

在 JavaScript 中，对象是数据（变量），拥有属性和方法。

>属性和方法
>>属性是与对象相关的值。方法是能够在对象上执行的动作。<br/>
>>在面向对象的语言中，属性和方法常被称为对象的成员。


## 2. 创建 javascript 对象

**方法一：**
``` js
let Person = new Object(); // 声明一个空对象
```
**方法二：**
``` js
let Person = {};   // 声明一个空对象
```
## 3. 对象属性及对象方法

**JavaScript 属性**
属性指的是与 JavaScript 对象相关的值。

JavaScript 对象是无序属性的集合。

属性通常可以被修改、添加和删除，但是某些属性是只读的。

**访问语法**
<code>objectName.propertyName</code>

**JavaScript 方法**

方法是存储为对象属性的函数。

**访问语法**
<code>objectName.methodName()</code>


``` js
let Person = new Object();
Person.name = "麋鹿鲁哟"  //设置对象属性
Person.age = 22
Person.getDate = function(){  //设置对象方法
  return new Date();
}

console.log(Person) // {name: "麋鹿鲁哟", age: "22"}

console.log(Person.name)  // 麋鹿鲁哟      //访问对象属性
console.log(Person.getDate()) //输出当前时间   //访问对象方法

delete Person.age  // delete 关键词从对象中删除属性
```

>PS:对象的名称，对大小写敏感。

## 4. 对象访问器(get、set)

**为什么使用 Getter 和 Setter？**
* 它提供了更简洁的语法
* 它允许属性和方法的语法相同
* 它可以确保更好的数据质量
* 有利于后台工作

**JavaScript Getter（get 关键词）**

``` js
var Person = {
  name: "麋鹿鲁哟",
  age : 22,
  get lang() {
    return this.age;
  }
};
console.log(Person.lang)  // 22 
```

**JavaScript Setter（set 关键词）**

``` js
var Person = {
  name: "麋鹿鲁哟",
  age : 22,
  set lang(lang) {
    this.age = lang;
  }
};
// 使用 setter 来设置对象属性：
Person.lang = 3
console.log(Person.age)  // 3
```

## 5. 对象构造器

``` js
function Person(name,age){
  this.name = name;
  this.age = age;
}
```

函数 Person() 就是对象构造器函数。

通过 new 关键词调用构造器函数可以创建相同类型的对象：

``` js
var me = new Person("麋鹿鲁哟",22);
```

**this 关键词**

在 JavaScript 中，被称为 this 的事物是代码的“拥有者”。

this 的值，在对象中使用时，就是对象本身。

在构造器函数中，this 是没有值的。它是新对象的替代物。 当一个新对象被创建时，this 的值会成为这个新对象。

请注意 this 并不是变量。它是关键词。您无法改变 this 的值。

## 6. JavaScript 对象原型

**原型继承**

所有 JavaScript 对象都从原型继承属性和方法。

* 日期对象继承自 Date.prototype。
* 数组对象继承自 Array.prototype。
* Person 对象继承自 Person.prototype。
* Object.prototype 位于原型继承链的顶端：
* 日期对象、数组对象和 Person 对象都继承自 Object.prototype。

**prototype 属性**

JavaScript prototype 属性允许您为对象构造器添加新属性、方法

``` js
function Person(name,age){
  this.name = name;
  this.age = age;
}
Person.prototype.github = "https://github.com/miluluyo";
```

## 7. ES5 对象方法

代码|详解
-|-|
Object.defineProperty(object, property, descriptor)|添加或更改对象属性
Object.defineProperties(object, descriptors)|添加或更改多个对象属性
Object.getOwnPropertyDescriptor(object, property)|访问属性
Object.getOwnPropertyNames(object)|以数组返回所有属性
Object.keys(object)|以数组返回所有可枚举的属性
Object.getPrototypeOf(object)|访问原型
Object.preventExtensions(object)|阻止向对象添加属性
Object.isExtensible(object)|如果可将属性添加到对象，则返回 true
Object.seal(object)|防止更改对象属性（而不是值）
Object.isSealed(object)|如果对象被密封，则返回 true
Object.freeze(object)|防止对对象进行任何更改
Object.isFrozen(object)|如果对象被冻结，则返回 true

## 7. prototype 继承

**语法**

``` js
子类.prototype = new 父类()
``` 

所有的 JavaScript 对象都会从一个 prototype（原型对象）中继承属性和方法。

指向了一个对象，这个对象正式调用该构造函数而创建的实例的原型

**__proto__**

__proto__这是每一个 javascript 对象( null 除外)都具有的属性，这个属性会指向该对象的原型


## 8. Number 对象

编码|详解
-|-|
toExponential()|可把对象的值转换成指数计数法。
toFixed()|可把 Number 四舍五入为指定小数位数的数字。
toPrecision()|方法可在对象的值超出指定位数时将其转换为指数计数法。
toString()|可把一个逻辑值转换为字符串，并返回结果。
valueOf()|可返回 Boolean 对象的原始值。

## 9. Math (算数) 对象

执行常见的算数任务。

编码|详解
-|-|
abs(x)|返回 x 的绝对值。
acos(x)|返回 x 的反余弦值。
asin(x)|返回 x 的反正弦值。
atan(x)|以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。
atan2(y,x)|返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）。
ceil(x)|对数进行上舍入。
cos(x)|返回数的余弦。
exp(x)|返回 Ex 的指数。
floor(x)|对 x 进行下舍入。
log(x)|返回数的自然对数（底为e）。
max(x,y,z,...,n)|返回 x,y,z,...,n 中的最高值。
min(x,y,z,...,n)|返回 x,y,z,...,n中的最低值。
pow(x,y)|返回 x 的 y 次幂。
random()|返回 0 ~ 1 之间的随机数。
round(x)|四舍五入。
sin(x)|返回数的正弦。
sqrt(x)|返回数的平方根。
tan(x)|返回角的正切。




