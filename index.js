//var a = '10'
//var b = 20

//console.log(parseInt(a, 10) + b)
//console.log(Number(a) + b)


//var a = (6 == 5)
//console.log(a)

//console.log(0 === '0') //false
//console.log(null == undefined)  //true
//console.log(null == '') //false
//console.log(0 == '')  //true
//console.log(null == 0) //false

//var score = 55
//    if (score <= 70 && score <= 60) {
//        console.log("pass")
//    }

//var number = 13
//    if (number % 10 === 0 ) {
//        console.log('10的倍數')
//    } else {
//        console.log('不是10的倍數')
//   }

//var age = 67
//    if (age >= 65) {
//        console.log('elder')
//    } else if (age >= 20) {
//        console.log('young')
//    } else {
//        console.log('child')
//    }

//var month = 2

//switch(month) {
//    case 1:
//        console.log("一月")
//        break
//    case 2:
//        console.log("二月")
//        break
//    default:
//        console.log("請重新輸入") 
//}
//可以把兩個條件寫在一起

/* var month = 4

switch(month) {
    case 3:
    case 4:
        console.log("春季")
        break
    case 6:
    case 7:
        console.log("春季")
        break    
    default:
        console.log("請重新輸入")
} */

//另一個解法(利用 mapping 更簡潔)
/* var month = 3

var month_to_chinese = ['一月', '二月', '三月']
console.log(month_to_chinese[month - 1]) */

/* var score = 60
var isPass = ''
    if (isPass = score >= 60) {
        console.log(isPass)
        console.log('過關')
    } */

//三元運算子(如果是 true 回傳 A 如果是 false 回傳 B，實作上建議放一層就好，巢狀用 if else)
//condition ? A : B
/* var score = 50
var message = score >= 60 ? 'PASS' : 'FAIL'
console.log(message) */

//[JS101]判斷式練習一
/* var score = 100
    if (score === 100) {
        console.log("you are no1")
    } else if (score >= 60) {
        console.log("pass")
    } else {
        console.log("fail")
    }  */

//同學巢狀作法
/* var score = 70;

score >= 60
    ? score === 100
        ? console.log("you are no1.")
        : console.log("pass")
    : console.log("fail"); */

//[JS101]判斷式練習二
/* var w = 70
var h = 180/100
var BMI = w/(h*h)

switch(true) {
    case (BMI < 18.5):
        console.log('體重過輕')
        break
    case (18.5 <= BMI && BMI < 24):
        console.log('正常範圍')
        break
    case (24 <= BMI && BMI < 27):
        console.log('過重')
        break    
    case (27 <= BMI && BMI < 30):
        console.log('輕度肥胖')
        break
    case (30 <= BMI && BMI < 35):
        console.log('中度肥胖')
        break
    default:
        console.log('重度肥胖')
}  */

/*
for (初始值; 終止條件; i每一圈要做的事 ) {
}
*/
/* for (var i = 1; i<=100; i++) {
    console.log(i)
}
for (var i = 1; i<=100; i+=2) {
    console.log(i)
} */
/* for (var i =1; i<=20; i++) {
    if (i%2) continue
    console.log(i)
} */

/* var scores = [78,66,89,92,94]
var sum = 0
var average = 0
for (var i=0; i<scores.length; i++) {
    sum += scores[i]
}
average = sum/5
console.log(sum)
console.log(average)
 */
/* 
function generateArray(n) {
    var result = []
    for(var i = 1; i<=n; i++) {
        result.push(i)
    }
    return result
}
console.log(generateArray(0))

//generateArray(3) => [1, 2, 3]
//generateArray(10) */

/* 
function generateArray(from, to) {
    var result = []
    for(var i = from; i<=to; i++) {
        result.push(i)
    }
    return result
}
var a = 3
var b = 10
console.log(generateArray(a,b))

//generateArray(3) => [1, 2, 3]
//generateArray(10) => [1, 2, 3, ...., 10] */

/* function log(n) {
    for(var i = 1; i<=n; i++) {
        console.log(i)
    }
}
log(10)
//一樣可以呼叫函式 */
/* 
function logEven(number) {
    if(number%2 - 1) {
        console.log(number)
    }
}
function print1to100() {
    for(var i = 1; i<=100; i++) {
        logEven(i)
    }
}
print1to100()
//印出 1~100 的偶數
//卡關可以嘗試先拆解成 function
 */
/* 
var hello = function() {
    console.log('hello')
}
hello()
//function 也是一種資料型態，所以變數可以等於一個 function
 */
/* 
function print(anything) { 
    anything()
}

function hello() {
    console.log('hello')
}

print(hello)
print(123)

//把 hello 這個函數傳進去，所以 hello 其實就是 anything 這個 function
//anything() 等於是呼叫 hello()
//傳 123 會出錯，因為 123 不是一個 function */


/* 
//function 為參數範例
//將輸入的 array 值皆 * 4
function transform(arr, transformFunction) {
    var result = []
    for(var i = 0; i<arr.length; i++) {
        result.push(transformFunction(arr[i]))
    }
    return result
}

function fourtimes(x) {
    return x*4
}

console.log(transform([1, 3, 5], fourtimes))

//另一種方式，可以跑出同樣結果(匿名函式 anonymous function)
console.log(
    transform([1, 3, 5], function(x) {
        return x*4
    })
) */

/* 
//字串轉數字(整數) => parseInt(字串, 幾進位)
//字串轉數字(浮點數) => parseFloat(字串)
//**依然是字串**(浮點數四捨五入進位到想要的位數) => parseFloat(字串/數字).toFixed(要的位數)
//**依然是字串**(浮點數四捨五入進位到整數位) => parseFloat(字串/數字).toFixed() = parseInt
var a = 10
var b = '20'

// 第一個做法 
console.log(a + Number(b))
// 第二個做法 
console.log(a + parseInt(b))

//--------------------------
//有浮點數的情況
var c = 10
var d = '20.34467'

// 全加 
console.log(c + parseFloat(d))
// 取小數點前面兩位 四捨五入加總
console.log(c +parseFloat(parseFloat(d).toFixed(2)))
// 四捨五入到整數位加總
console.log(c +parseFloat(parseFloat(d).toFixed()))
// 第三點也等於 parseInt
console.log(c + parseInt(d))

console.log(c + Math.ceil(d))


//四捨五入
console.log(Math.round(325.5))
//天花板(無條件進位)
console.log(Math.ceil(70.29))
//地板(無條件捨去)
console.log(Math.floor(55.87))


//產生一個 0~0.99999 的隨機數 =>Math.random()
//
console.log(Math.floor((Math.random()*100 + 1)))

//數字變字串
var e = 20
console.log(e.toString())
//數字 + 字串 = 字串
console.log(e + '') */

/* var a = 'ADE'.toLowerCase()
var b = 'ved'.toUpperCase()
console.log(a)
console.log(b)

//得到這個字串所代表的數字是多少，charCodeAt(字串位置)
var c = 'CCCAAA'
var cCode = c.charCodeAt(3)//若要取A
var numberString = String.fromCharCode(67, 68, 69)//數字轉字串
console.log(cCode)//A=65 a=97
console.log(numberString)
//小寫轉大寫另一方式 97-65 = 32
var test = 'g'
var testCode = test.charCodeAt(0)
var str = String.fromCharCode(testCode - 32)
console.log(str)
//字串可以比大小
var char = 'G'
console.log(char >= 'A' && char <= 'Z')//判斷是否為大寫 */

/* 
var str = 'hey hello world yoyoyoyo'
var index = str.indexOf('hello')
console.log(index)
//回傳 4，hello 這個單字的第一個字；如果沒有這個字會回傳負數
var index2 = str.indexOf('hello!!!')
console.log(index2 < 0) //true 這個字不存在 */

/* var str = 'hey hello world yoyoyoyo'.replace('hey', '!!!!')
console.log(str)//印出!!!! hello world yoyoyoyo，只會match到第一個
//要全部換掉需使用正規表達式 regex
var strReg = 'hey hello world yoyoyoyo'.replace(/y/g, '!!!!')
console.log(strReg)//印出he!!!! hello world !!!!o!!!!o!!!!o!!!!o */

/* //最常用在讀取資料 json/csv
var str = 'hey hello world yoyoyoyo'
console.log(str.split(''))//字母切，空格也會
/* [
  'h', 'e', 'y', ' ', 'h',
  'e', 'l', 'l', 'o', ' ',
  'w', 'o', 'r', 'l', 'd',
  ' ', 'y', 'o', 'y', 'o',
  'y', 'o', 'y', 'o'
] */
/*
console.log(str.split(' '))//用空格切[ 'hey', 'hello', 'world', 'yoyoyoyo' ]
 */

//去掉前後空格
var str = ' data1,data2,data3 '
console.log(str.trim())//印出data1,data2,data3