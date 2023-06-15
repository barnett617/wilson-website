# sessionStorage

sessionStorage.getItem()取的值是字符串，如果如下判断会不符合预期

```js
sessionStorage.setItem('visit', false);
const isVisited = sessionStorage.getItem('visit');
if (isVisited && Boolean(isVisited)) {
  console.log('a'); 
} else {
  console.log('b'); 
}
```

输出a

实际上相当于

```js
if ('false' && Boolean('false')) {
  console.log('a');
} else {
  console.log('b');
}
```

```js
('false' && Boolean('false')) === (true && true) === true
```