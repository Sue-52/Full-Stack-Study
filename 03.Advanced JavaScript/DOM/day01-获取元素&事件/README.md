# WebAPI

## WebAPI简介

### js基础和webapi的关系

js基础规定的是js的基本语法 webapi是为了实现网页交互的
只有在js基础知识之上 我们才能去学习webapi 从而实现网页交互

### 什么是webapi

API: 其他开发者预先定义好的一些方法(功能)
WebAPI: 其他开发者(浏览器厂商 其他开发者)预先定义好的一组 操作网页的(DOM)和 操作浏览器的(BOM) 方法
学习WebAPI的方法:
  1.知道这个方法的作用
  2.知道这个方法需要那些参数
  3.知道这个方法返回啥
  4.知道这个方法的兼容性咋样

### DOM是什么

DOM(document object model) 文档对象模型 主要的作用: 改变网页的内容 样式 结构  

### 基本概念

DOM树: 就是根据网页来进行抽象出来的一种树状结构
文档: document  一个页面就是一个文档
元素: element <标签>内容</标签> 任何一个标签都是一个元素
节点: node
      标签节点(一个标签就是一个节点 <p></p>)
      文本节点(标签里面的内容就是文本节点 <p>1111</p>这里的1111就是文本节点)
      属性节点(<p title="aaa"></p> title="aaa"这就是属性节点)
      注释

## 元素获取

### 通过ID获取元素

  方法: document.getElementById('id名')
  返回值: 元素对象
  参数: id名
  兼容性: 没任何兼容性

  ```js
   <script>
    // 获取元素通过id   id不能重复的
    // 语法:  元素对象 = document.getElementById('id的名字')  无兼容性

    let oDiv = document.getElementById('dv');
    console.log(oDiv) // 大家看到的标签其实是一个对象 (对象是有方法和属性的)
    console.dir(oDiv); // 打印对象详细信息的
   </script>
  ```

### 通过标签名获取元素

  方法: element.getElementsByTagName('标签名')  注意: element可以是任何元素 也可以是document
  功能: 通过标签名来获取元素
  参数: 标签名
  返回值: 元素对象集合(伪数组)
  兼容性: 在任何浏览器都可以

  ```js
   // let aUl = document.getElementsByTagName('ul');
    // console.log(aUl);
    // console.log(aUl[0])
    // console.dir(aUl[0]);
  ```

### 通过类名获取元素

  方法: document.getElementsByClassName('类名');
  功能: 通过类名来获取元素
  参数: 类名名
  返回值: 元素对象集合(伪数组)
  兼容性: 兼容性没有id和标签名好 但是在现代(新)浏览器中都可以用

  注意: \<div class="a b c"></div> 你可以用a获取 也可以用b获取

### 通过css选择器获取元素

// 方法: document.querySelector('css选择器')
// 参数: 符合css选择器的 (#id名  .class名  标签名)
// 返回值: 元素对象
// 兼容性: 不能用在低版本浏览器中
// 注意点: 如果符合css选择器规则的元素有多个 只获取第一个

// 如果你想要获取多个 还想用querySelector 你可以选择querySelectorAll
// 方法: document.querySelectorAll(); // 选择器到符合css选择器规则的所有元素
// 参数: 符合css选择器的 (#id名  .class名  标签名)
// 返回值: 元素对象集合(伪数组)
// 兼容性: 低版本浏览器中不行

### 获取特殊元素

```js
    // 获取特殊元素
    // 如何获取body标签
    // 方法: document.body
    // 返回: body元素
    // 参数: 无参数
    // 兼容性: 无兼容性
    // console.log(document.body);
    // 如何获取html标签
    // document.documentElement
    // 返回: html元素
    // 参数: 没有
    // 兼容性: 无兼容性
    // console.log(document.documentElement);
```

## 事件基础

### 事件的概念

 事件: 事件就是一个信号 它可能是用户或者电脑发生的，在本阶段 主要用户的点击  按键盘 鼠标划过了

### 事件三要素

  ```js
    当 发送按钮    被点击的时候  文字发送给了大家
    当 回车键     被按下的时候   内容发送给力大家
    当 麦克风图片  被点击的时候  就可以进行语音通话了

    1. 事件源: 事件发生在谁身上
    2. 事件类型: 浏览器给我们规定好的一些事件类型 click(点击) moseover(鼠标移入)
    3. 事件处理程序: 当事件在事件源发生的时候 要干啥

  ```


### 事件的执行步骤

1.获取事件源
2.绑定事件
3.书写事件处理程序

```
 let 元素 = 获取元素的方法
 元素.on+事件类型 = function (){
   // 让程序做啥 写在这里
 }
```

### 常见的事件类型

- onclick 鼠标点击左键触发
- onmouseover 鼠标经过触发
- onmouseout 鼠标离开触发
- onfocus 获得鼠标焦点触发
- onblur 失去鼠标焦点触发
- onmousemove 鼠标移动触发
- onmouseup 鼠标弹起触发
- onmousedown 鼠标按下触发