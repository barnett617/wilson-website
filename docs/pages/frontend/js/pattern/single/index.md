# 单例模式

新建对象时判断全局是否有该对象，如果有，就返回该对象，没有就创建一个新对象返回。

## 实现

```js
var Single = (function() {
  var instance = null;
  function Single(name) {
    this.name = name;
  }
  return function (name) {
    if (!instance) {
      instance = new Single(name);
    }
    return instance;
  };
});
var oA = new Single('hi');
var oB = new Single('hello');
console.log(oA === oB);
```

## 解析

在第一次调用构造函数时利用闭包存储一个instance实例，以后的调用直接返回instance。

## ES6写法

```js
class Singleton {
  constructor(name) {
    this.name = name;
    this.instance = null;
  }

  static getInstance(name) {
    if (!this.instance) {
      this.instance = new Singleton(name);
    }
    return this.instance;
  }

}
var oA = Singleton.getInstance('hi');
var oB = Singleton.getInstance('hisd');
console.log(oA === oB);
```

## static 关键字解释

类相当于实例的原型，所有在类中定义的方法都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。

## 单例模式的应用

全局中只需要一个公用的实例对象，比如登录弹窗组件。