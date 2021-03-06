# jQuery

## 相对于当前页面的位置

```js
 // jQuery对象.offset()  此方法只对可见元素有效
    // 相对于页面左上角的top $('选择器').offset().top;
    // 相对于页面左上角的left $('选择器').offset().left;

    $('button').click(function () {
      console.log($('.inner').offset().left, $('.inner').offset().top)
    })
```

## 相对于父元素左上角的位置

```js
   //  jQuery对象.position()  此方法只对可见元素有效
    // 相对于父元素左上角的top $('选择器').position().top;
    // 相对于父元素左上角的left $('选择器').position().left;

    $('button').click(function () {
      console.log($('.inner').position().left, $('.inner').position().top)
    })

    // 整型: 整数  20 402

    // 浮点型: 小数 20.001 20.1

```

## 卷曲出去的距离

```js
 // 点击按钮 获取div中卷曲的内容的高度
    // 获取匹配元素相对滚动条顶部的偏移。
    // 此方法对可见和隐藏元素均有效。

    // 也可以设置 $('元素').scrollTop(值)

    $('button').click(function () {
      // console.log($('div').scrollTop(), $('div').scrollLeft())
      $('div').scrollTop(300);
    })

```

## 获取元素计算后的height和width

```js
  $('button').click(function () {
      // 取得匹配元素当前计算的高度值（px）。
      // 取得第一个匹配元素当前计算的宽度值（px）。
      // 在 jQuery 1.2 以后可以用来获取 window 和 document 的宽
      console.log($('.inner').width(), $('.inner').height())
    })
```

## 包括内边距但不包括边框的宽度

```js
 // 获取匹配元素不包括边框 包括内边距的宽度
    // 返回的对象包含两个整型属性:top和left.为精确计算结果,请在补白 边框 和填充属性上使用像素单位
    $('button').click(function () {
      console.log($('.inner').innerWidth(), $('.inner').innerHeight())
    })
```

## 包括内边距和边框的宽度

```js
  // outerHeight()
  // outerWidth()
 $('button').click(function () {
      console.log($('.inner').outerHeight(), $('.inner').outerWidth())
    })

```