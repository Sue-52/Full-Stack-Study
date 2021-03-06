# jQuery插件

## jQuery插件市场
jQuery之家 http://www.htmleaf.com/
jQuery插件库 http://www.jq22.com/
jQuery官方: https://plugins.jquery.com/


## 定义

通过别人开发 写出来的一些功能 发布到网上 供其他开发者使用的代码 叫插件
所谓的jQuery插件 就是基于jQuery开发的一些好用的功能的代码

所谓的js插件(库) 就是基于原生的js 原生的DOM开发的一些好用的功能代码

全局对象: $或jQuery
lodash: _

jQuery插件数量特别多 能满足大家业务开的所有需求

## 扩展jQuery的工具方法

```js
$.fn.changeColor = function (color) {
  $(this).css('backgroundColor', color)
}
```
## 解决全局对象同名冲突的问题
```js
// 问题
var $ = 10;
$(function (){
console.log('xxxx')
})

// 方案一: 把$换成jQuery
// var $ = 10;
// // Uncaught TypeError: $ is not a function
// jQuery('button').on('click', function () {
//   console.log("姚姚真能吃")
// })

// 方法二: 把$使用权给释放 换成别的符号 $.noConflict();
// var jq = $.noConflict();
// var $ = 10;
// // Uncaught TypeError: $ is not a function// 
// jq('button').on('click', function () {
//   console.log("姚姚真能吃")
// })
```

## 放大镜插件

### 介绍

exzoom是一款jquery商城商品放大镜插件。该jquery放大镜插件,自带缩略图导航和自动播放功能,也提供了手动修改大图的方法。

### 下载

```txt
http://www.htmleaf.com/jQuery/Image-Effects/201807245242.html
```

### 使用步骤

#### 第一步 引入
```txt
<link href="dist/css/jquery.exzoom.css" rel="stylesheet">
<script src="js/jquery-1.11.0.min.js" type="text/javascript"></script>
<script src="js/jquery.exzoom.js"></script>   
```
#### 第二步 html结构
该jquery放大镜的HTML结构如下
```html
<div class="exzoom" id="exzoom">
    <!--大图区域-->
    <div class="exzoom_img_box">
        <ul class='exzoom_img_ul'>
            <li><img src="images/photos/img01.jpg"/></li>
            <li><img src="images/photos/img02.jpg"/></li>
            <li><img src="images/photos/img03.jpg"/></li>
            <li><img src="images/photos/img04.jpg"/></li>
            <li><img src="images/photos/img05.jpg"/></li>
            <li><img src="images/photos/img06.jpg"/></li>
            <li><img src="images/photos/img07.jpg"/></li>
            <li><img src="images/photos/img08.jpg"/></li>
        </ul>
    </div>
    <!--缩略图导航-->
    <div class="exzoom_nav"></div>
    <!--控制按钮-->
    <p class="exzoom_btn">
        <a href="javascript:void(0);" class="exzoom_prev_btn"> < </a>
        <a href="javascript:void(0);" class="exzoom_next_btn"> > </a>
    </p>
</div>     
```
#### 第三步 初始化插件
```js
$("#exzoom").exzoom();
```

## 标签页插件

### 介绍

这是一款jQuery响应式Tabs选项卡插件。该tabs选项卡插件兼容ie8，当浏览器缩小到小于选项卡的宽度时，选项卡的菜单会以下拉菜单的方式来显示。

### 下载
```txt
http://www.htmleaf.com/jQuery/Tabs/201809285348.html
```
### 使用步骤
#### 第一步 引入
```txt
<link href="css/jquery.horizontalmenu.css" rel="stylesheet"> 
<script type="text/javascript" src="js/jquery.min.js"></script>             
<script type="text/javascript" src="js/jquery.horizontalmenu.js"></scrip
```
#### 第二步:html结构
```html
 <!-- 点击按钮 -->
  <div class="ah-tab-wrapper">
    <div class="ah-tab">
      <a class="ah-tab-item" data-ah-tab-active="true" href="">北京</a>
      <a class="ah-tab-item" href="">上海</a>
      <a class="ah-tab-item" href="">深圳</a>
      <a class="ah-tab-item" href="">广州</a>
      <a class="ah-tab-item" href="">天津</a>
      <a class="ah-tab-item" href="">成都</a>
      <a class="ah-tab-item" href="">西安</a>
    </div>
  </div>
  <!-- 内容 -->
  <div class="ah-tab-content-wrapper">
    <div class="ah-tab-content" data-ah-tab-active="true">
      <h2>Personal data</h2>
    </div>
    <div class="ah-tab-content">
      <h2>Contacts</h2>
    </div>
    <div class="ah-tab-content">
      <h2>Tab item with a long name</h2>
    </div>
    <div class="ah-tab-content">
      <h2>Password change</h2>
    </div>
    <div class="ah-tab-content">
      <h2>Tab item</h2>
    </div>
    <div class="ah-tab-content">
      <h2>我在成都的街上走了走</h2>
    </div>
    <div class="ah-tab-content">
      <h2>还是西安的肉夹馍好吃</h2>
    </div>
  </div>
```
#### 第三步 调用
```js
  $(function () {
      $('.ah-tab-wrapper').horizontalmenu({
        itemClick: function (item) {
          $('.ah-tab-content-wrapper .ah-tab-content').removeAttr('data-ah-tab-active');
          $('.ah-tab-content-wrapper .ah-tab-content:eq(' + $(item).index() + ')').attr('data-ah-tab-active', 'true');
          return false; //if this finction return true then will be executed http request
        }
      });
    });
```


## 全屏滚动插件
### 介绍
fullPage.js是一款js页面全屏滚动插件。可轻易创建全屏滚动单页网站。可以和vue.js，react.js和angular.js完美结合使用。

fullPage.js兼容所有的现代浏览器，以及一些旧版浏览器，如Internet Explorer 9，Opera 12等都能兼容。 可兼容支持CSS3的浏览器与非支持CSS3的浏览器，适用于旧版浏览器。 同时，手机、平板电脑和触摸屏电脑还提供触屏支持。
### 下载
```txt
http://www.htmleaf.com/jQuery/Layout-Interface/201812055442.html
```
### 使用步骤
#### 第一步 引入
```txt
<link rel="stylesheet" href="./css/fullpage.css">
<script src="../lib/jquery-3.4.1.min.js"></script>
<script src="./js/fullpage.min.js"></script>
```
#### 第二步html结构
```html
  <div id="fullpage">
    <div class="section">Some section</div>
    <div class="section">Some section</div>
    <div class="section">Some section</div>
    <div class="section">Some section</div>
  </div>
```
#### 第三步调用插件
```js
 $(document).ready(function () {
      $('#fullpage').fullpage({
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        navigation: true,
        // 设置小圆点的方向 左右
        navigationPosition: "right",
        // 滚动的时间 默认是 700ms  
      });
    });
```
## 轮播图插件
### 介绍
Swiper是一款支持硬件加速过渡动画的移动手机幻灯片插件。该幻灯片可以很好的在iOS，Android，Windows Phone 8和桌面浏览器中工作。Swiper提供了大量参数和api，功能非常强大。
### 官网
```txt
https://www.swiper.com.cn/usage/index.html
```
### 使用步骤
#### 第一步 引入
```txt
 <script src="../lib/jquery-1.12.3.min.js"></script>
  <script src="./js/swiper.min.js"></script>
  <script src="./js/swiper.jquery.js"></script>
```


#### 第二步 html结构
```html
 <!-- 幻灯片的容器 -->
  <div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide">
        <a href="">
          <img src="./image/monster3.jpg" alt="">
        </a>
      </div>
      <div class="swiper-slide">
        <a href="">
          <img src="./image/monster4.jpg" alt="">
        </a></div>
      <div class="swiper-slide">
        <a href="">
          <img src="./image/monster5.jpg" alt="">
        </a></div>
      <div class="swiper-slide">
        <a href="">
          <img src="./image/monster6.jpg" alt="">
        </a></div>
    </div>
    <!-- 分页 -->
    <div class="swiper-pagination"></div>

    <!-- 导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </div>
```
#### 第三步 调用插件
```js
 var mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      // direction: 'vertical',
      loop: true,

      // If we need pagination
      // 分页
      pagination: '.swiper-pagination',

      // Navigation arrows 左右按钮
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',

      // And if we need scrollbar
      // scrollbar: '.swiper-scrollbar',
    })        
```

## 日期选择插件

## 表单校验插件(任何网站)
