# Reflect

## 设计目的

1. 将Object对象一些明显属于语言内部的方法，放到reflect对象上（比如Object.defineProperty）
2. 修改某些Object方法的返回结果，使其更合理
3. 让Object操作变成函数行为（某些Object操作是命令式的，比如 `in` 、 `delete` ）
4. Reflect对象的方法和Proxy对象的方法一一对应（Proxy修改默认行为，可在Reflect上获取默认行为）

## 静态方法

1. apply
2. construct
3. get
4. set
5. defineProperty
6. deleteProperty
7. has
8. ownKeys
9. isExtensible
10. preventExtensions
11. getOwnPropertyDescriptor
12. getPrototypeOf
13. setPrototypeOf

## 应用：观察者模式

函数观察数据对象

观察目标（可被观察的）
```js
var person = observable({
  name: 'tom',
  age: 24
})
```

观察者
```js
function print() {
  console.log(`${person.name}, ${person.age}`)
}
```

建立观察关系
```js
observe(print)
```

触发观察响应
```js
person.name = 'jerry'
```

实现
```js
// 观察队列
const queuedObservers = new Set()

// 观察方法
const observe = fn => queuedObservers.add(fn)

// 将对象可被观察
// 返回原始对象代理，拦截赋值操作
const observable = obj => new Proxy(obj, {set})

function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver)
  // 先执行观察者的方法
  queuedObservers.forEach(observer => observer())
  // 再执行原行为
  return result
}
```