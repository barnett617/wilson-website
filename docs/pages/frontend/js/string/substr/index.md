# 字符串 substr 方法

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substr

> 这个方法即将被废弃，官方已不推荐使用

## 作用

返回从索引 `index` 开始的 `length` 个字符的字符串

```js
var log = console.log;
var str = 'hello world!'

log(str.substr(2, 3));
// llo

log(str.substr(-3, 2));
// ld

log(str.substr(0, 3));
// hel

log(null.substr(0, 3));
// Uncaught TypeError: Cannot read properties of null (reading 'substr')
```

## 实现

```js
function _substr(startIndex, length = this.length) {
  log(Object.prototype.toString(this));
  log(this.toString());
  log(typeof this);
  log(this.length);

  const len = this.length;
  if (typeof this !== 'object' && !this.length) {
    throw('only string can be treated with substr method')
  }
  const chars = this.split('');
  let result = '';

  // handle startIndex
  if (typeof startIndex !== 'number' || Math.abs(startIndex) > len) {
    startIndex = 0;
  } else if (startIndex < 0) {
    startIndex = startIndex + len;
  }

  // handle length
  if (typeof length !== 'number' || length < 0 || length === 0) {
    return '';
  }

  // handle main logic
  for (let i = 0; i < chars.length; i ++) {
    if (result.length !== length && !(i < Math.round(startIndex))) {
      result += chars[i];
    }
  }
  return result
}
```

## 测试

```js
Object.prototype._substr = _substr;
log(str._substr(2, 3));
// llo

log(str._substr(-3, 2));
// hel

log(str._substr(0, 3));
// ld

log(str._substr(13, 2));
// he

log(str._substr(13));
// hello world!

log(str._substr(13, -2));

log(str.substr(3, 2))
log(str.substr(4, 2))
log(str.substr(3.4, 2));
log(str._substr(3.4, 2))
log(str.substr('test'));
// hello world!
log(str.substr('test', 2));
// he
log(str._substr('test'));
// hello world!
log(str._substr('test', 2));
// he
log(str.substr(3, 'test'));
log(str._substr(3, 'test'));
```

## 官方 polyfill

官方对于【Microsoft's JScript 不支持负的 start 索引】的衬垫代码

```js
if ('ab'.substr(-1) !== 'b') {
  String.prototype.substr = function(substr) {
    return function(start, length) {
      if (start < 0) start = start + this.length;
      return substr.call(this, start, length)
    }(String.prototype.substr)
  }
}
```