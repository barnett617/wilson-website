# IIFE(立即执行函数)

```js
var log = console.log;
var test=function(a){
  log(a)
  return function(c){
    log(c)
  }
}(function(b){
  log(b)
})(1)
test('hello')
// 1
// TypeError: test is not a function
```

```js
var log = console.log;
var test=function(a){
  log(a)
  return function(c){
    log(c)
  }
};(function(b){
  log(b)
})(1)
test('hello')
// 1
// hello
```