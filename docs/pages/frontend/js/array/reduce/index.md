# 数组 reduce 方法

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。

## 关键词

- 每个元素
- 执行函数
- 升序执行
- 汇总为单个返回

## reducer 函数接收4个参数
 
- Accumulator (acc) (累计器)
- Current Value (cur) (当前值)
- Current Index (idx) (当前索引)
- Source Array (src) (源数组)

reducer 函数的返回值分配给累计器，该返回值在数组的每个迭代中被记住，并最后成为最终的单个结果值。

```js
arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
```

## 函数签名

- 必传参数：只有回调函数、回调函数的前两个参数是必传的
- 可选参数：reduce第二个参数用于指定callback第一次执行的累加器初始值，默认不传则使用数组第一个值（所以没有值的空数组调用reduce将报错）
- 返回值：函数累计处理结果

```js
arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
```

## 示例

### 数组求和

```js
const arr = [1, 2, 3, 4];

function basic() {
  const reducer = (acc, cur) => acc + cur;
  const arr2 = arr.reduce(reducer)
  console.log(arr2);
}
basic()
```

输出
```js
// 10
```

### 过程输出

```js
const arr = [1, 2, 3, 4];

function restBasic() {
  const reducer = (acc, cur) => {
    console.log('acc: ' + acc);
    console.log('cur: ' + cur);
    console.log('acc + cur: ' + (acc + cur));
    return acc + cur;
  }
  const arr2 = arr.reduce(reducer)
  console.log(arr2);
}
restBasic(arr);
```

输出
```js
// acc: 1
// cur: 2
// acc + cur: 3
// acc: 3
// cur: 3
// acc + cur: 6
// acc: 6
// cur: 4
// acc + cur: 10
```

> 做到了累加数组每个元素的效果，而且能追踪每一次累加的过程

### 数组最大值

```js
/**
 * 处理单元素数组和空数组（以求数组最大值为例）
 */
function mapBeforeReduce() {
  // 字典数组
  const data1 = [{x: 22}, {x: 24}];
  // 如果数组只有一个值会直接返回，callback不会被调用
  const data2 = [{x: 22}];
  const data3 = [];

  const reducer = (acc, cur) => Math.max(acc.x, cur.x);
  console.log(data1.reduce(reducer))
  console.log(data2.reduce(reducer))
  console.log(data3.reduce(reducer))
  // 24
  // {x: 22}
  // Uncaught TypeError: Reduce of empty array with no initial value

  const advancedReducer = (acc, cur, index) => {
    return Math.max(acc, cur)
  }
  // 赋值初始值
  console.log(data1.map(el => el.x).reduce(advancedReducer, -Infinity))
  console.log(data2.map(el => el.x).reduce(advancedReducer, -Infinity))
  console.log(data3.map(el => el.x).reduce(advancedReducer, -Infinity))

  // 24
  // 22
  // -Infinity

  /**
   * 拿出对象中的某个属性做最大值筛选
   * 可以对复杂结构的数据做计算处理
   * 
   * 传入默认初始值 -Infinity 主要是兼容空数组不报错
   */
  data1.map(el => {
    return el.x
  }).reduce((acc, cur) => {
    return Math.max(acc, cur)
  }, -Infinity)

  const data1Result = data1.map(el => el.x)
  console.log(data1Result)
  const data2Result = data2.map(el => el.x)
  console.log(data2Result)
  const data3Result = data3.map(el => el.x)
  console.log(data3Result)
  // [22, 24]
  // [22]
  // []
}

mapBeforeReduce()
```

### 二维数组转一维

```js
/**
 * 二维数组转一维（衍生：多维数组降维）
 */
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function(a, b) {
    return a.concat(b);
  },
  []
);
```

> 为了不改变原数组，传入空数组用于存储扁平化后的新数组

### 计算元素出现次数

```js
/**
 * 计算元素出现次数
 */
function computeCount() {
  const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
  const result = names.reduce((acc, cur) => {
    if (cur in acc) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc
  }, {})
  // 为什么要传空对象作为初始累加值呢
  // 因为是用来存储统计每个对象出现次数的字典
  console.log(result)
  // {Alice: 2, Bob: 1, Tiff: 1, Bruce: 1}
  // Alice: 2
  // Bob: 1
  // Bruce: 1
  // Tiff: 1
}

// computeCount();
```

### 按属性对对象数组进行分组

```js
/**
 * 按属性对对象数组进行分组
 */
function groupByProp() {
  var people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
  ];
  function groupBy(objArr, prop) {
    objArr.reduce((acc, cur) => {
      // 确认当前元素应所属的键，以在后面的插入环节找到要插入的对象
      let key = cur[prop]
      if (!acc[key]) {
        // 如果该键下还没有数组，则进行创建
        acc[key] = []
      }
      acc[key].push(cur)
      return acc
    }, {})
    // 初始化值为一个空对象，依次遍历数组，把空对象变成以目标分组名为键，以分组后的数组为值的对象
  }
  const result = groupBy(people, 'age')
  console.log(result)
  // groupedPeople is:
  // { 
  //   20: [
  //     { name: 'Max', age: 20 }, 
  //     { name: 'Jane', age: 20 }
  //   ], 
  //   21: [{ name: 'Alice', age: 21 }] 
  // }
}
```