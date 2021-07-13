// charAt()	获取指定位置处字符
// charCodeAt()	获取指定位置处字符的ASCII码
// concat()	拼接字符串，等效于+，+更常用
// slice()	从start位置开始，截取到end位置，end取不到 返回他们之间的字符串
// substr()	从start位置开始，截取length个字符 包括start位置
// indexOf()	返回指定内容在元字符串中的位置
// trim()	只能去除字符串前后的空白

// charAt()	获取指定位置处字符
// 字符串.charAt(索引) 返回 那个位置的字符串
// var str = "zhagnsan";
// console.log(str.charAt(5));


// charCodeAt()	获取指定位置处字符的ASCII码
// 字符串.charCodeAt(索引);

// var str = "zhagnsan";
// console.log(str.charCodeAt(1));


// concat()	拼接字符串
// 字符串.concat(另一个字符串)

// var str1 = "我爱你,";
// var str = "一万年";

// console.log(str1.concat(str));


// indexOf() 查找某一个字符第一次出现的位置 ，如果有 返回索引 如果没有 返回-1
// 字符串.indexOf(字符);

// var str1 = "我爱你一万年";
// console.log(str1.indexOf('爱'));


// trim()	只能去除字符串前后两端的空白
// 字符串.trim();

// var str = '   你吃了  吗？   ';
// console.log(str);
// console.log(str.trim());




// slice()	从start位置开始，截取到end位置，end取不到 返回他们之间的字符串
// 字符串.slice(start,end);

var str = "Hello, WORLD";

  
// console.log(str.slice(2,9));

console.log(str.slice(str.length-1,str.length));


//  substr()	从start位置开始，截取length个字符 包括start位置
// 字符串.substr(从哪个索引开始,取几个字符);

// var str = "nice to meet you too";
// console.log(str.substr(0,4));



// 	截取字符串"我爱中华人民共和国"，中的"中华"
var str = "我爱中华人民共和国";
console.log(str.substr(2,2));