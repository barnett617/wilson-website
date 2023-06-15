# Proxy

https://es6.ruanyifeng.com/#docs/proxy

## 概述

- 修改操作的默认行为
- 在语言层面上进行修改（元编程）
- 对编程语言进行编程

## 使用

```js
var proxy = new Proxy(target, handler);
```

## 特殊

如果属性不可配置且不可写，则`Proxy`不能修改该属性，否则报错

## Proxy支持拦截的操作

1. get
2. set
3. apply
4. has
5. construct
6. deleteProperty
7. defineProperty
8. getOwnPropertyDescriptor
9. getPrototypeOf
10. isExtensible
11. ownKeys
12. preventExtensions
13. setPrototypeOf

## 可取消的Proxy实例

Proxy.revocable

## 应用

Proxy对象可以拦截目标对象任意属性，所以适合做Web服务的客户端