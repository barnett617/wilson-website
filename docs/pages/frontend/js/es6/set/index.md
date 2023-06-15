# Set 

## 特点

- 类似于数组
- 成员唯一无重复

## 应用

### 数组去重

```js
const oldArr = [1, 2, 2, 3, 3, 4];
var newArr = [...new Set(oldArr)]   // [1, 2, 3, 4]
```

### 字符串去重

```js
const oldStr = 'aabbcddee';
var newStr = [...new Set(oldStr)].join('')    // "abcde"
```

## 值添加

- 不会发生类型转换（5和'5'会被认为是两个值）
- 算法为Same-value-zero equality
- 类似于`精确相等运算符`===，但认为NaN是自身，与===不同
- 对象总被认为不相同

```js
let set = new Set();
let a = NaN;
let b = NaN;
set.add(a);
set.add(b);
set     // {NaN}
```

```js
let set = new Set();
let a = {};
let b = {};
set.add(a);
set.add(b);
set.size;     // 2
```

## 属性和方法

### 属性

- constructor
- size

### 方法

- add
- delete
- has
- clear

### 转换为数组

数组去重（dedupe）
```js
const oldArr = [1, 2, 2, 3, 4, 4, 5]
const newArr = Array.from(new Set(oldArr))    // [1, 2, 3, 4, 5]
```

等同于
```js
const oldArr = [1, 2, 2, 3, 4, 4, 5]
const newArr = [...new Set(oldArr)]       // [1, 2, 3, 4, 5]
```

### 遍历操作

- keys
- values
- entries
- forEach

#### 特性

- 遍历顺序为插入顺序
- 键名和键值相同，所以keys和values方法行为相同

#### 并集、交集和差集

```js
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

let union = new Set([...a, ...b])
let intersect = new Set([...a].filter(x => b.has(x)))
let difference = new Set([...a].filter(x => !b.has(x)))
```

## WeakSet

### 与Set区别

- WeakSet成员只能是对象
- WeakSet中的对象都是弱引用，垃圾回收不考虑WeakSet对该对象的引用（弱引用的意思）

```js
const a = [[1, 2], [3, 4]];
const b = new WeakSet(a)    // ([1, 2], [3, 4])
```
类数组（具有Iterable接口的对象）的成员如果是对象，会成为WeakSet实例的成员

```js
const c = [5, 6];
const d = new WeakSet(c)
```
类数组（具有Iterable接口的对象）的成员如果不是对象，会报错

### 特性

- 如果其他对象不再引用WeakSet中的对象a，垃圾回收机制会忽略WeakSet对a的引用而进行回收
- 适合临时存放一组对象 或 【存放跟对象绑定的信息，这样当对象在外部消失，绑定信息也会随即消失】
- 成员不适合引用，因为会随时消失
- 成员不可遍历，因为垃圾回收时机不可预测

### 方法

- add
- delete
- has

(比set少clear方法)

### 应用

储存DOM节点，防止节点从文档移除时引发内存泄露