# Map and Set

## 前置准备

```js
// predefine some tools
function print(content) {
  console.log(content);
}
```

```js
// predefine some const
const commonArr = [1, 2, 3, 3, 4];
```

## 数组去重

```js
// remove repeat value
function testSet() {
  const s = new Set();

  [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

  for (let i of s) {
      console.log(i);
  }
}
testSet();

// 2
// 3
// 5
// 4
```

```js
// 接受参数：数组或具有iterable接口的数据结构
function testPara() {
  const set = new Set([1, 2, 3, 4, 4]);
  console.log([...set]);
  console.log("size: " + set.size);
}
testPara();

// [ 1, 2, 3, 4 ]
// size: 4
```

## Set.add

1. 向 Set 加入值，不做类型转换，5和"5"是不同的值
2. 内部判断值是否相同的算法是`Same-value-zero equality`，类似精确相等运算符(===)

区别在于 Set 中的 NaN 等于自身，=== 判定 NaN 不等于自身

```js
function aboutParam() {
  let set = new Set();
  let a = NaN;
  let b = NaN;
  set.add(a);
  set.add(b);
  console.log(set);
}
aboutParam();

// Set { NaN }
```

## Operating methods 

- Set add(value)   
- boolean delete(value)
- boolea has(value)
- void clear()

```js
function aboutSetMethod() {
  let s = new Set();
  s.add(1).add(2).add(2);
  print('size: ' + s.size);
  print(s.has(2));
  print(s.has(3));
  print(s.delete(2));
  print(s.has(2));
}
aboutSetMethod();

// size: 2
// true
// false
// true
// false
```

### Transform Set to Array

```js
function transSetToArray() {
  const items = new Set([1, 2, 3, 4, 5]);
  const array = Array.from(items);
  print(array);
}
transSetToArray();

// [ 1, 2, 3, 4, 5 ]
```

### Remove repeat elements

```js
function dedupe(array) {
  return Array.from(new Set(array));
}
print(dedupe(commonArr));

// [ 1, 2, 3, 4 ]
```

## Iterating methods

- keys()
- values()
- entries()
- forEach()

> Tip: Set遍历顺序为元素插入时的顺序

```js
// keys()
// values()
// entries()
// 返回值都是遍历器Iterator
```

Set结构没有键名，只有键值（键名同键值），所以keys()和values()方法的行为一致

```js
function aboutKeyAndValue() {
  let set = new Set(['red', 'green', 'blue']);

  for (let item of set.keys()) {
      print(item);
  }

  for (let item of set.values()) {
      print(item);
  }

  for (let item of set.entries()) {
      print(item);
  }
}
aboutKeyAndValue();

// red
// green
// blue
// red
// green
// blue
// [ 'red', 'red' ]
// [ 'green', 'green' ]
// [ 'blue', 'blue' ]
```

> conclusion: 键名同值

Set结构的实例默认可遍历，默认遍历器生成函数就是values()

```js
// print(Set.prototype[Symbol.iterator] === Set.prototype.values);
// true
// 所以可以省略values()，直接用for...of遍历Set

function aboutIterateSet() {
  let set = new Set(['red', 'green', 'blue']);

  for (let item of set) {
      print(item);
  }
}

// aboutIterateSet();
// red
// green
// blue
```
