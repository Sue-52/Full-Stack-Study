# WebAPI-- BOM

## BOM概述

### 什么是BOM

  BOM(browser Object Model)浏览器对象模型， 为我们提供了与浏览器窗口交互的接口，核心对象就是window
  BOM由很多很多对象构成，这个对象都提供了很多方法和属性

  注意: ECMAScript 这个是没有兼容性的
        DOM  这个兼容性有一些 但是比较小
        BOM 因为操作的是浏览器这个软件 所以说不同的浏览器 兼容性是很大的

   我们学习BOM学习的是没有兼容性或者说兼容性比较小的一些属性和方法

### BOM的组成

  Window
    Document 操作网页的
    Location 操作网址的
    Navigator 操作浏览器的信息和设置的(其实只能获取)
    Screen (屏幕) 获取屏幕信息的
    History  操作浏览器历史记录的

## Window对象

### Window顶级对象
  BOM就是window
  1.JS访问浏览器的一个接口
  2.它是一个全局对象，定义在全局中的变量和方法都是Window的属性和方法

### Window的常见事件
  #### load事件
  功能: 等网页中的所有东西(结构 样式 js代码 img 文字 各种文件)加载完毕 才能执行js代码
  语法: window.onload = function(){}
  语法: window.addEventListener('load',function(){})

  缺点: 因为等的东西太多 所以不能及时的响应事件 这样是不好的(可能时间等的比较长)
  #### DOMContentLoaded事件
  功能: 等网页中的DOM结构加载完就可以执行
  语法: document.addEventListener("DOMContentLoaded", function (){})
  #### resize事件
  功能: 只要浏览器大小发生一丁点变化 这个事件就会触发
  语法: window.addEventListener('resize', function (){})
### Window的定时器

#### 延时定时器(等待一段时间 执行某个动作)
##### 创建
    功能: 等待一段时间 来执行某个动作
    语法: let 定时器的名字(虽说是名字 但其实值是数字) = setTimeout(具名函数, 时间(单位是毫秒1s=1000ms))
    注意: 具名函数要写 不要写匿名函数  时间的单位是毫秒

##### 删除
    功能: 清除延时定时器
    语法:  clearTimeout(定时器的名字)


#### 周期定时器(隔一段时间 执行一个动作)
##### 创建
    功能: 隔一段时间 执行一个动作
    语法: let 定时器的名字(虽说是名字 但其实值是数字) = setInterval(具名函数, 时间(单位是毫秒1s=1000ms))
    注意: 具名函数要写 不要写匿名函数  时间的单位是毫秒

##### 删除
    功能: 清除周期定时器
    语法:  clearInterval(定时器的名字)


