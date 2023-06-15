# 抖音LOGO实现

## 效果演示

<div class="wrap">
  <div class="g-container">
    <div class="j"></div>
    <div class="j"></div>
  </div>
</div>

<style>
@import './index.scss';
</style>

## HTML

```html
<!DOCTYPE html>
<html>
<body>
  <!-- 主要借助伪元素实现了整体 J 结构，借助了 mix-blend-mode 实现融合效果 -->
  <!-- 两个 J 形结构重叠部分为白色 -->
  <div class="wrap">
    <div class="g-container">
      <div class="j"></div>
      <div class="j"></div>
    </div>
  </div>
</body>
</html>
```

## scss

```scss:line-numbers {scss}
.wrap {
  background: #000;
  overflow: hidden;
  height: 600px;
}
.g-container {
  position: relative;
  width: 200px;
  margin: 100px auto;
  filter: contrast(150%) brightness(110%);
}
.j {
  position: absolute;
  top: 0;
  left: 0;
  width: 47px;
  height: 218px;
  z-index: 1;
  background: #24f6f0;
  &::before {
    box-sizing: content-box;
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    border: 47px solid #24f6f0;
    border-top: 47px solid transparent;
    border-radius: 50%;
    top: 121px;
    left: -147px;
    transform: rotate(45deg);
  }
  &::after {
    box-sizing: content-box;
    content: "";
    position: absolute;
    width: 140px;
    height: 140px;
    border: 40px solid #24f6f0;
    border-right: 40px solid transparent;
    border-top: 40px solid transparent;
    border-left: 40px solid transparent;
    top: -110px;
    right: -183px;
    border-radius: 100%;
    transform: rotate(45deg);
    z-index: -10;
  }
}
.j:last-child {
  left: 10px;
  top: 10px;
  background: #fe2d52;
  z-index: 100;
  mix-blend-mode: lighten;
  animation: moveLeft 10s infinite;
  &::before {
    border: 47px solid #fe2d52;
    border-top: 47px solid transparent;
  }
  &::after {
    border: 40px solid #fe2d52;
    border-right: 40px solid transparent;
    border-top: 40px solid transparent;
    border-left: 40px solid transparent;
  }
}
@keyframes moveLeft {
  0% {
    transform: translate(200px);
  }
  50% {
    transform: translate(0px);
  }
  100% {
    transform: translate(0px);
  }
}
```

## css

```css:line-numbers {css}
.wrap {
  background: #000;
  overflow: hidden;
  height: 600px;
}
.g-container {
  position: relative;
  width: 200px;
  margin: 100px auto;
  filter: contrast(150%) brightness(110%);
}
.j {
  position: absolute;
  top: 0;
  left: 0;
  width: 47px;
  height: 218px;
  z-index: 1;
  background: #24f6f0;
}
.j::before {
  box-sizing: content-box;
  content: "";
  position: absolute;
  width: 100px;
  height: 100px;
  border: 47px solid #24f6f0;
  border-top: 47px solid transparent;
  border-radius: 50%;
  top: 121px;
  left: -147px;
  transform: rotate(45deg);
}
.j::after {
  box-sizing: content-box;
  content: "";
  position: absolute;
  width: 140px;
  height: 140px;
  border: 40px solid #24f6f0;
  border-right: 40px solid transparent;
  border-top: 40px solid transparent;
  border-left: 40px solid transparent;
  top: -110px;
  right: -183px;
  border-radius: 100%;
  transform: rotate(45deg);
  z-index: -10;
}
.j:last-child {
  left: 10px;
  top: 10px;
  background: #fe2d52;
  z-index: 100;
  mix-blend-mode: lighten;
  animation: moveLeft 10s infinite;
}
.j:last-child::before {
  border: 47px solid #fe2d52;
  border-top: 47px solid transparent;
}
.j:last-child::after {
  border: 40px solid #fe2d52;
  border-right: 40px solid transparent;
  border-top: 40px solid transparent;
  border-left: 40px solid transparent;
}
@keyframes moveLeft {
  0% {
    transform: translate(200px);
  }
  50% {
    transform: translate(0px);
  }
  100% {
    transform: translate(0px);
  }
}
```

[参考链接](https://chokcoco.github.io/CSS-Inspiration/#/./blendmode/blend-douyin-logo)