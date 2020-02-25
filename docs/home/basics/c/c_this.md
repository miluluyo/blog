---
title: 1. this、call、apply 和 bind
---

## 1. this

原理：**this永远指向最后一个调用它的那个对象**

1. 情景一 普通函数调用，this指向window

``` js
function fn(){
  console.log(this); 
}
fn()  //Window
``` 

2. 情景二 作为对象方法的调用 this指向该方法所属的对象

``` js
var obj = {
  fn:function(){
    console.log(this) // obj
  }
}
obj.fn()
``` 

3. 情景三 作为构造函数调用 this指向实例对象

``` js
function test() {
　this.x = 1;
}

var obj = new test();
obj.x // 1
``` 

4. 情景四 事件绑定的方法 this指向绑定事件的对象

``` js
btn.onclick = function(){
  console.log(this)
}
``` 

5. 情景五 定时器函数 this指向window

``` js
setInterval(function(){
  console.log(this);// window
},1000);
``` 

**函数内部的 this 是由调用时确定其指向，匿名函数的this指向window**

## 2. bind,call,apply

使用 apply、call、bind 函数是可以改变 this 的指向的

### bind

bind()方法创建一个新的函数, 当被调用时，将其this关键字设置为提供的值，在调用新函数时，在任何提供之前提供一个给定的参数序列。

**语法**

<code>function.bind(thisArg[,arg1[,arg2[, ...]]])</code>

``` js
var a = {
  name : "Cherry",
  func1: function () {
    console.log(this.name)
  },
  func2: function () {
    setTimeout(  function () {
      this.func1()
    }.bind(a)(),100);
  }
};
a.func2()            // Cherry
```

### call

将函数作为对象的方法来调用，将指定参数传递给该方法

**语法**

<code>function.call(thisObj, arg1,arg2,...argN)</code>

``` js
var a = {
  name : "Cherry",
  func1: function () {
    console.log(this.name)
  },
  func2: function () {
    setTimeout(  function () {
        this.func1()
    }.call(a),100);
  }
};
a.func2()            // Cherry
```

### apply

将函数作为对象的方法来调用，将参数以数组形式传递给该方法

**语法**

<code>function.apply(thisObj,[arg1,arg2,....argN])</code>

``` js
var a = {
  name : "Cherry",
  func1: function () {
    console.log(this.name)
  },
  func2: function () {
    setTimeout(  function () {
        this.func1()
    }.apply(a),100);
  }
};
a.func2()            // Cherry
```

## 3. 箭头函数

**箭头函数的 this 始终指向函数定义时的 this，而非执行时。**

箭头函数中没有 this 绑定，必须通过查找作用域链来决定其值，如果箭头函数被非箭头函数包含，则 this 绑定的是最近一层非箭头函数的 this，否则，this 为 undefined


``` js
  var name = "windowsName";
  var a = {
    name : "Cherry",
    func1: function () {
      console.log(this.name)     
    },
    func2: function () {
      setTimeout( () => {
        this.func1()
      },100);
    }
  };
  a.func2()     // Cherry
```

**在函数内部使用 _this = this**

先将调用这个函数的对象保存在变量 _this 中，然后在函数中都使用这个 _this，这样 _this 就不会改变了。

``` js
var name = "windowsName";
var a = {
  name : "Cherry",
  func1: function () {
    console.log(this.name)     
  },
  func2: function () {
    var _this = this;
    setTimeout( function() {
      _this.func1()
    },100);
  }
};
a.func2()       // Cherry
```

