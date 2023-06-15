# Map

## 出现原因

解决对象的键只能是字符串的限制，实现更完善的Hash结构实现

## 注意点

- 对同一个对象的引用，Map才会视为同一个键
- 键是简单类型时，需要严格相等，才会视为相同的键
- NaN不严格等于自身，但是Map视其为相同的键

```js
const map = new Map();
map.set(['a'], 5);
map.get(['a'])    // undefined
```

这两个对象['a']看上去一样，但是两个对象的引用

## 好处

- Map的键和内存地址绑定，内存不同就是不同的键 
- 避免同名属性碰撞问题
- 拓展第三方库时，使用对象作为键名，不用担心键名与第三方库的键名相同的问题

## 属性和方法

### 属性

- size

### 方法

- set
- get
- has
- delete
- clear

### 遍历方法

- keys
- values
- entries
- forEach

### 快捷转换为数组的方法

```js
const map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three']
]);

[...map.keys()];      // [1, 2, 3]
[...map.values()];    // ["one", "two", "three"]
[...map.entries()];   // [[1,'one'], [2, 'two'], [3, 'three']]
[...map];             // [[1,'one'], [2, 'two'], [3, 'three']]
```

### 其他转换

#### 数组转map

```js
new Map([
  [true, 7],
  [{foo: 3}, ['abc']]
])

// [[Entries]]
// 0: {true => 7}
// key: true
// value: 7
// 1: {Object => Array(1)}
// key: {foo: 3}
// value: ["abc"]
```

## WeakMap

### 方法

- get
- set
- has
- delete