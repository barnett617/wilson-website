# 装饰器

## 简介

- 定位：与类相关的语法
- 用处：注释或修改类和类方法
- 优势：增加代码可读性，清晰表达意图，方便增加或修改类的功能

## 特点

装饰器对被装饰目标（类）行为的改变，是编译阶段发生的，而非运行时

## 用处

能在编译阶段运行代码

## 本质

编译时执行的函数

## 类装饰器

类装饰器是一个对类进行处理的函数（第一个参数是要被装饰的目标）

### 基础示例

```js
@decorator
class A {

}
```

相当于
```js
class A {

}

A = decorator(A) || A;

function decorator(A) {

}
```

### 为类添加静态属性

```js
function testable(isTestable) {
  return function(target) {
    target.isTestable = isTestable;
  }
}

@testable(true)
class MyTestableClass {

}
MyTestableClass.isTestable // true

@testable(false)
class MyClass {

}
MyClass.isTestable // false
```

修改了装饰器的行为

### 为类的实例添加属性

```js
function testable(target) {
  target.prototype.isTestable = true;
}

@testable
class MyTestableClass {

}

let obj = new MyTestableClass();
obj.isTestable;  // true
```

## 装饰类的成员（方法的装饰）

### 示例：使类方法只读

```js
class Person {
  @readonly
  name() {
    return `${this.first} ${this.last}`
  }
}
```

```js
// target 类的原型对象（因为修饰类的方法，原型还没生成）
// name 要装饰的属性名
// descriptor 要装饰的属性名的描述对象
function readonly(target, name, descriptor) {
  // 装饰前
  // {
  //   value: specifiedFunction,
  //   enumerable: false,
  //   configurable: true,
  //   writable: true
  // };
  descriptor.writable = false;
  return descriptor
}
```

### 示例：使类属性不可遍历

```js
class Person {
  @nonenumerable
  get kidCount() {
    return this.children.length;
  }
}

function nonenumerable(target, name, descriptor) {
  descriptor.enumerable = false;
  return descriptor
}
```

### 示例：增加日志

```js
class Math {
  @log
  add(a, b) {
    return a + b;
  }
}

function log(target, name, descriptor) {
  var old = descriptor.value;

  descriptor.value = function() {
    console.log(`Calling ${name} with`, arguments);
    return old.apply(this, arguments)
  }

  return descriptor
}

const math = new Math();

math.add(2, 3);
```

## 多个装饰器

洋葱模型：从外到内进入，从内到外执行

```js
function desc(id) {
  console.log('evaluated', id);
  return (target, property, descriptor) => console.log('executed', id)
}

class Example {
  @desc(1)
  @desc(2)
  method() {

  }
}

let obj = new Example();
obj.method();

// evaluated 1
// evaluated 2
// executed 2
// executed 1
```

## 混入示例

moduleA.js

```js
export function mixins(...list) {
  return function (target) {
    Object.assign(target.prototype, ...list)
  }
}
```

moduleB.js

```js
import { mixins } from './moduleA';

const Foo = {
  foo() {
    console.log('foo');
  }
}

@mixins(Foo)
class MyClass {

}

let obj = new MyClass();
// obj.foo()
```