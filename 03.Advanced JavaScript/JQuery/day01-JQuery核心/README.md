# jQuery

## jQuery核心

### jQuery核心函数

```js
自调用函数: 自己调用自己

(function (形参){
  // 代码
}(实参))

(function(形参){})(实参)

```

```js
<script>
    // 所谓的jQuery核心函数,就是$或jQuery
    // jQuery定义了这个全局的函数提供我们使用
    // 它既可以作为一般函数调用
    // 它也可以作为对象调用早就定义好的方法
  </script>
  <script>
    (function (window, undefined) {

      var jQuery = (function () {

        // Define a local copy of jQuery
        var jQuery = function (selector, context) {
          //  返回了一个 jquery的对象 只有在创建对象的时候 才会new
          return new jQuery.fn.init(selector, context, rootjQuery);
        },
        return jQuery; // 对象
      })();
      // Expose jQuery to the global object
      window.jQuery = window.$ = jQuery;
    })(window);
  </script>
```

jQuery中的核心对象: $或者jQuery
jQuery中的jQuery函数 是jQuery官方早就给我定义好的
既可以作为函数调用
也可以作为对象去调用jQuery官方定义好的方法

jQuery的核心函数$()
你给$()这个方法传入什么样的参数 就会有不同的功能

### jQuery核心对象

$.each()

## jQuery选择器


## jQuery操作元素
