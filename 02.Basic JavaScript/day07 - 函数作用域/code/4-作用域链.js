// var num = 10;
function fn() {
  // var num = 20;
  function fn1() {
    // var num = 30;
    function fn2() {
      // var num = 40;
      function fn3() {
        // var num = 50;
        console.log(num);
      }
      fn3();
    } 
    fn2();
  }
  fn1();
}
fn();

// 总结一下: 变量一定是从最理里层外最外层去寻找
// 如果自己寻找不到 往外找  如果一直寻找不到 就报错
