# 可选链式调用

用处：优化对象的对层级属性访问判空

```js
function optionalChain() {
  const res = {
    code: 200,
    data: {
      contents: {
        price: 22
      }
    }
  }
  // 传统方式
  if (res && res.data && res.data.contents && res.data.contents.price) {
    console.log('origin: ' + res.data.contents.price);
  }
  // 可选链式
  if (res?.data?.contents?.price) {
    console.log('now: ' + res.data.contents.price);
  }
  if (res?.data?.content?.price) {
    console.log('wrong: ' + res.data.contents.price);
  }
}
function main() {
  optionalChain();
}
main()

// 直接运行结果如下

// if (res?.data?.contents?.price) {
//   ^

// SyntaxError: Unexpected token .

// 可以通过 npm start 使用babel转换为 lib 目录中可运行的格式

// origin: 22
// now: 22
```