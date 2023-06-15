# 观察者模式

其定义对象间一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知

## 声明观察者

```js
var observer = {
  // 注册观察
  regist: function (eventName, callback) {
    if (!this.obj) {
      this.obj = {};
    }
    if (!this.obj[eventName]) {
      this.obj[eventName] = [callback];
    } else {
      this.obj[eventName].push(callback);
    }
  },

  // 发射事件
  emit: function (eventName) {
    for (var i = 0; i < this.obj[eventName].length; i++) {
      this.obj[eventName][i];
      // this.obj[eventName][i](arguments[n]); 有参数的
    }
  },

  // 移除观察
  remove: function (eventName, callback) {
    for (var i = 0; i < this.obj[eventName].length; i++) {
      if (this.obj[eventName][i] == callback) {
        this.obj[eventName].splice(i, 1);
      }
    }
  }
}
```

## 事件注册

```js
//给三个模块注册事件
observer.regist("loginSuccess", function() {
  console.log("用户信息模块接收到了登录成功的消息，做出了响应");
})

observer.regist("loginSuccess", function() {
  console.log("购物车模块接收到了登录成功的消息，做出了响应");
})

observer.regist("loginSuccess", function() {
  console.log("消息模块接收到了登录成功的消息，做出了响应");
})
```

## 广播

```js
observer.emit("loginSuccess"); 
```