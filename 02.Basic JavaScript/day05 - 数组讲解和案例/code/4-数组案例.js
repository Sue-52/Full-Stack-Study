
// 案例1: 求数组中所有元素的和
// var arr = [2,4,6,7,10];
// var num = 0;
// var arr =[2,4,6,7,10];
// for(var i = 0; i < arr.length; i++){
//       num +=arr[i];
// }
// console.log(num);




// 案例2: 求数组中所有元素的平均值
// var arr = [40, 50, 120, 123, 100];

// var sum = 0; // 和
// var avg = 0; // 平均值

// for (var i = 0; i < arr.length; i++) {
//       sum += arr[i];
// }

// avg = sum / arr.length;

// console.log("和为:" +sum + "平均值为: "+ avg);



// 案例3: 求数组中所有元素中的最大值
// var arrNum = [23, 45, 87, 92, 97];
// var arr  = [23, 45, 87]

// // 1.假设数组中的第0个数为最大值
// var maxValue = arrNum[0];
// // 2.遍历数组
// for (var i = 0; i < arrNum.length; i++) {
// // 3.判断 数组中的第一个数 23  不大于 23  那么最大值还是 23
// //        数组中的第二个数45  大于 23    那么最大值是 45
//       //  数值中的第三个数87  大于45     那么最大值是 87
//       if (arrNum[i] > maxValue) {
//             maxValue = arrNum[i];
//       }
// }
// // 4.打印最大值
// console.log(maxValue);





// 案例4: 求数组中所有元素的最小值


// 案例5: 倒序遍历数组
// var arrNum = [23, 45, 87, 92, 97];

// 正序
// for (var i = 0; i < arrNum.length; i++) {
//       console.log(arrNum[i]);
// }

// 倒序
// for (var i = arrNum.length -1 ;  i >=0; i--) {
//       console.log(arrNum[i]);
// }

// 案例6: 把数组中每个元素用 | 拼接到一起产生一个字符串并输出
// var w = ['郭凯', '伍乐乐', '钟林国', '高源', '王明仁', '雷名锴']

// 变成    郭凯|伍乐乐|钟林国|高源|王明仁|雷名锴

// var str = "";
// for (var i = 1; i < w.length; i++) {
//       str += "|" + w[i];
// }

// console.log(w[0] +str);












// 案例7: 去掉数组中重复的元素0， 把其他的数据放在一个新的数组中
// var arr = [10, 0, 20, 0, 30, 0, 50];
// // var arr = [10, 0, 20, 0]; //  arr = [10, 20]


// // 1.先定义一个空数组
// var newArr = [];
// // 2.循环遍历数组
// for (var i = 0; i < arr.length; i++) {
// // 3.判断 数字是否不等于0  如果不等于 放到新数组中去
//   if (arr[i] != 0) {
//     newArr[newArr.length] = arr[i];
//   }
// }

// // 4. 打印新数组
// console.log(newArr);











// 案例8: 反转数组---把数组中的数据的位置调换
var arr = [10, 20, 30, 40]; //  变成 [40, 30, 20, 10]

// for (var i = 0; i < arr.length /2; i++) {
//   var temp = arr[i];
//   arr[i] = arr[arr.length -1 - i];
//   arr[arr.length -1 - i] = temp;
// }

// console.log(arr);



