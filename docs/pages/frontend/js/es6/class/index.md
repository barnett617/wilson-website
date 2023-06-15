# class

http://es6.ruanyifeng.com/#docs/class

> class的本质是语法糖

## 生成实例对象

### 传统方法——通过构造函数

```js
function Point(x, y) {
  this.x = x;
  this.y = y;
}
Point.prototype.toString =  function() {
  return '(' + this.x + ', ' + this.y + ')'
}
var p = new Point(1, 2);
```

### 用类的写法

```js
class PointClass {
  // 构造方法
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return '(' + this.x + ', ' + this.y + ')'
  }
}
var p = new PointClass(1, 2);
```

> 结论：ES5的构造函数 对应 ES6类的构造方法

```js
console.log(typeof PointClass)
// function --> 类的数据类型就是函数
console.log(PointClass === PointClass.prototype.constructor)
// true --> 类本身指向构造函数
```

```js
/**
 * 构造函数的 prototype 属性在 ES6类 上继续存在
 * 类的所有方法都定义在 prototype属性上(它是一个对象，存储着类所有的方法)
 */
class PointClassOther {
  constructor () {

  }
  toString() {

  }
  toValue() {

  }
}
```

等同于以下写法

```js
PointClassOther.prototype = {
  constructor () {

  },
  toString() {

  },
  toValue() {

  }
}
```

因此可以通过将类的方法添加在 prototype 属性上为类添加新方法

```js
class PointClass2 {
  constructor() {

  }
}
Object.assign(PointClass2, {
  toString(){

  },
  toValue(){

  }
})
```

prototype 对象的 constructor 属性直接指向类本身，这与 ES5 行为一致

```js
console.log(Point.prototype.constructor === Point)
console.log(PointClass2.prototype.constructor === PointClass2)
// true
// true
```

类内部定义方法不可枚举，与 ES5 行为不一致

```js
console.log(Object.keys(Point.prototype))
console.log(Object.keys(PointClass2.prototype))
// [ 'toString' ] --> 方法对象的原型上定义的函数可被枚举到
// [] --> 类内部定义方法不可枚举，与 ES5 行为不一致
console.log(Object.getOwnPropertyNames(Point.prototype));
console.log(Object.getOwnPropertyNames(PointClass2.prototype));
// [ 'constructor', 'toString' ]
// [ 'constructor' ]
console.log(Object.keys(Point))
console.log(Object.keys(PointClass2))
// 这是什么??
// []
// [ 'toString', 'toValue' ]
```

## 对比

类无法直接调用，需要通过 new 调用，会默认调用类的构造方法

函数可以直接调用

## 关于实例

```js
/**
 * 实例的属性除非显式地定义在其本身（即定义在 this 上）
 * 否则都是定义在原型上（即定义在 class 上）
 * 与 ES5 行为一致
 */
class PointClass3 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

var point3 = new PointClass3(2, 3);

point3.toString() // (2, 3)

point3.hasOwnProperty('x') // true -> x 在 this 上
point3.hasOwnProperty('y') // true -> y 在 this 上
point3.hasOwnProperty('toString') // false -> toString 在 PointClass3 上

console.log('point3: ' + point3.__proto__.hasOwnProperty('toString')) // true
console.log('point3: ' + PointClass3.prototype.hasOwnProperty('toString')) // true

// 类的所有实例共享同一个原型对象，与 ES5 一致
var point4 = new PointClass3(3, 4);
console.log('point3&4: ' + (point3.__proto__ === point4.__proto__)); // true
console.log('point3&4: ' + (point3.__proto__ === PointClass3.prototype)); // true
console.log('point3&4: ' + (point3.__proto__ === PointClass3.prototype)); // true
// point3.__proto__ === PointClass3.prototype
// point4.__proto__ === PointClass3.prototype

// __proto__ 是环境提供给 js 的属性，不可用于生产环境
// 可通过 Object.getPrototypeOf 获取对象实例的原型 来为 原型添加 方法或属性
Object.getPrototypeOf(point3).print = function() {
  return 'hello'
}
console.log(point3.print()) // hello
console.log(point4.print()) // hello
// 通过实例为类的原型添加了方法，会影响到所有该类的实例
```

## 存值与取值

存值与取值函数是定义在属性的描述对象上面的，与 ES5 一致

```js
class CustomHTMLElement {
  constructor(element) {
    this.element = element;
  }
  get html() {
    return this.element.innerHTML
  }
  set html(value) {
    this.element.innerHTML = value
  }
}
/**
 * @param 类的原型
 * @param 指定属性
 * @returns 属性描述符对象
 */
var descriptor = Object.getOwnPropertyDescriptor(CustomHTMLElement.prototype, 'html');
console.log('desc: ' + ('get' in descriptor)); // true
console.log('desc: ' + ('set' in descriptor)); // true
```

类不存在提升，不同于 ES5 中的函数提升

```js
test();
// test
function test() {
  console.log('test')
}
```

```js
// var _class = new ClassTest();
// ReferenceError: ClassTest is not defined
class ClassTest {
  constructor() {
    console.log('ClassTest')
  }
}
```

## name属性

因为 ES6 class 只是对 ES5 构造函数的一层封装，所以函数很多特性都被类继承

```js
function NameFun() {

}
class NameClass {

}
console.log('name: ' + NameFun.name);     // NameFun
console.log('name: ' + NameClass.name);   // NameClass
```

## this 指向

类的方法内部如果有 this, 默认指向类的实例，但是将方法单独提出来调用可能会丢失 this。

```js
class Logger {
  printName(name = 'there') {
    this.print(`Hello ${name}`);
  }

  print(text) {
    console.log(text);
  }
}

const logger = new Logger();
const { printName } = logger;
// printName(); // TypeError: Cannot read property 'print' of undefined
// this 指向运行时所在环境
```

## 解决 this 丢失

### 方法 1 —— 绑定 this

```js
class Logger1 {
  constructor() {
    this.printName1 = this.printName1.bind(this);
  }
  printName1(name = 'there') {
    this.print(`Hello ${name}`);
  }

  print(text) {
    console.log(text);
  }
}
const logger1 = new Logger1();
const { printName1 } = logger1;
printName1();
// Hello there
```

### 方法 2 —— 箭头函数

箭头函数内部的 this 总是指向声明箭头函数时所在对象

```js
class Logger2 {
  constructor() {
    this.printName2 = (name = 'there') => {
      this.print(`Hello ${name}`);
    }
  }

  print(text) {
    console.log(text);
  }
}
const logger2 = new Logger2();
const { printName2 } = logger2;
printName2();
// Hello there
```

### 方法 3 —— proxy

获取方法时自动绑定 this

> 待补充，详见 proxy

## 静态方法

类相当于实例的原型 --> 所有在类中声明的方法会被实例继承

静态方法不会被实例继承，而直接通过类调用

```js
class ClassStatic {
    static hello() {
      return 'hello'
    }
}
var classStatic = new ClassStatic();
console.log('static: ' + ClassStatic.hello()) // hello
console.log('static: ' + classStatic.hello()) // TypeError: classStatic.hello is not a function
```