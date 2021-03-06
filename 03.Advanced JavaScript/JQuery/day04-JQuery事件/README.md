# jQuery

## 事件处理

## 事件的绑定

   元素.on(事件类型,[触发事件的元素],事件处理函数) 可以触发多次
   one(事件类型,事件处理函数) 只能触发一次

  ```js

  // 元素.on(事件类型,[触发事件的元素],事件处理函数) 可以触发多次

    // $('button').on('click', function () {
    //   console.log(11111);
    // })


    // 事件委托
    // 给body绑定点击事件 然后 当点击button的时候 click事件触发
    // $('.box').on('click', function () {
    //   console.log(1111);
    // })

    // 做事件委托的时候 本来要点击button 但是我可以把button的事件委托给box
    // $('.box').on('click', 'button', function () {
    //   console.log(1111);
    // })

    // one(事件类型, 事件处理函数) 只能触发一次
    // $('button').one('click', function () {
    //   console.log(11111);
    // })

  ```

## 事件的解绑

  元素.off(事件的名字,选择器)

  ```js
  // 首先我给butotn绑定一个click事件
    $('button').on('click', function () {
      console.log(111111);
    })

    $('button').on('mouseover', function () {
      console.log(2222);
    })
    // 当我点击div的时候 把button上的click事件给解绑了
    $('div').click(function () {
      $('button').off('click');
      $('button').off('mouseover');
    })

  ```

## 常见事件类型

### 页面载入事件

```js
// 入口函数
$(function (){
  代码
})
$(document).ready(function(){
  //代码
})
```

## 事件切换

hover(overfn,outfn)

```js

 // 当我鼠标移入 让div的背景颜色变成green 鼠标移出 变成黄色
    // hover(overfn,outfn)

    $('div').hover(function () {
      $(this).css('backgroundColor', 'green');
    }, function () {
      $(this).css('backgroundColor', 'yellow');
    })
```

toggle()

```js
 // 点击按钮让div在显示和隐藏之间切换
    $('button').on('click', function () {
      $('div').toggle()
    })
```

### 在鼠标移入移出变化 hover()

### 在显示和隐藏之间变化 toggle()

## 事件坐标

  鼠标在元素内相对于元素上左边缘的坐标 e.offsetX e.offsetY
  鼠标在元素内相对于可视区上左边缘的坐标 e.clientX e.clientY
  鼠标在元素内相对于页面上左边缘的坐标 e.pageX e.pageY

  `注意: 如果页面没有滚动条 client和page一样`

## 事件冒泡

   e.stopPropagation()

## 事件默认行为

    e.preventDefault();