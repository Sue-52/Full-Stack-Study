# WebAPI-封装缓动动画

## 匀速动画的原理

  // 动画原理
  // 1.获得盒子的位置 offsetLeft
  // 2.让盒子在当下的位置上 加上一个 距离(每次走多少 步长) 0 1  2 3 4
  // 3.让步长重复的增加到盒子当前的位置上  周期定时器setInterval
  // 4.加一个让定时器停止执行的条件

## 缓动动画函数的封装(匀速运动)

```js
   /**
     *
     * @param {Obejct} element 要添加动画的元素
     * @param {Number} target  元素移动的目标位置
     */
    function animate(element, target) {
      // 2.1 创建周期定时器
      let timer = setInterval(function () {
        // 2.1.1
        if (element.offsetLeft >= target) {
          clearInterval(timer);
        }
        element.style.left = element.offsetLeft + 1 + 'px';
      }, 20)
    }

```

## 获取元素计算后的样式(能获取任何元素的样式属性的值)

### 方法

  // IE9+
  属性值= window.getComputedStyle(元素, 伪元素(没有就写null)).属性名
  // IE8
  属性值 = 元素.currentStyle.属性名

  ```js
      // 获取任何元素在任何浏览器中的任何属性的值的方法
    /**
     * 
     * @param {Obejct} element 要获取哪个元素的属性
     * @param {String} attr  要获取元素的哪个属性
     */
    function getStyle(element, attr) {
      // 你支持这个方法吗window.getComputedStyle
      if (window.getComputedStyle) {
        return window.getComputedStyle(element, null)[attr];
      } else {
        // 不支持 就代表是 ie8
        return element.currentStyle[attr];
      }
    }


  ```

## 变速运动的原理

  1.让运动的元素步长(每次移动的距离)变小， 速度就会慢慢降下来
  2.核心的公式 （目标值-现在的位置)/10  作为每次移动的步长  
  3.停止的条件:  盒子的位置 = 目标值  就停定时器

## 封装变速运动的动画函数

## 封装变速动画的任意一个属性

## 封装变速运动的动画函数 多个属性

## 封装变速运动的动画函数 多个属性  回调函数

## 封装变速运动的动画函数 多个属性  回调函数 透明度