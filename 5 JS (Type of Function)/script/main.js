// ? Типи функцій

// !1 Функція оголошення (Function Declaration)

// console.log(showSum(1,4));

// function showSum (a,b){//!парематри
//     return a + b
// }

// showSum(1,2)//! аргументом

// /////////////////////////////////////////////

// function logArguments() {
//     console.log(arguments);
//     console.log(arguments[10]);
// }

// logArguments(1,2,3,4,5,6,7,true,false,'str', null, undefined)

//! return
// 1 щось вертає
// 2 виходить з фунції тобто вме що після return не працює

// !2
// function logReturn(a) {
//     console.log('start')
//     if (a === 10) {
//         return
//     }
//     console.log('finish')
//     return
// }

// logReturn(10)

// !1

// function test() {
//     const a = 111
//     return a
// }

// console.log(test());

//!2 Функції вирази (Function Expression)


// sayHello()

// const sayHello = function() {
//     console.log('hello');
// }

// sayHello()

//! 3 Стрілкові функції (Arrow Functions)

// sayBye()

// const sayBye = () => {
//     console.log('Bye');
// }

// sayBye()


// const test = () => {
//     // console.log(arguments);
//     return 1 + 2
// }

// console.log(test());

// const showSum = (a, b) => a + b

// console.log(showSum(1,2));

// const test2 = (a, b) => {
//     let count = 1
//     return a + b
// }


// console.log(test2('test', '!!!'));

//! 4 Самовикликаючи функції
//! (Immeditely Invoked Function Expression IIFE)

// (function (name) {
//     console.log(`Hello ${name} !!!`);
// })('Robert')
//? (fun(par){}) (arg)

// (function (name) {
//     console.log(`Hello ${name} !!!`);
// }('Robert'))

//? (fun(par){}(art))

// const iife = function (name) {
//     console.log(`Hello ${name} !!!`);
// }('Robert')

//? cosnt name = fun(par){}(arg)

//! 5 Рекурсивні фунукції (Recursive function)

// function logNum(num, stop) {
//     console.log(num);
//     if (num < stop) {
//         logNum(++num, stop)
//     }
// }

// logNum(1, 1000)


// 5! = 5 * 4 * 3 * 2 * 1 = 120
// ///////////////////////////////////////////////////////////

// function factorial(n) {
//     if(n === 0){
//         return 1// 0! = 1
//     }else {
//         return n * factorial(n - 1)// n! = n * (n-1)!
//     }
// }

// const number = 5
// const result = factorial(number)

// console.log(`${number}! = ${result}`);

// ///////////////////////////////////////////////////////

// let couter = 0

// function Recursion(number) {
//     if(couter < number){
//         console.log('inside')
//         ++couter
//         Recursion(number)
//     }
// }

// Recursion(5)


// ///////////////////////////////////////////////////////

// function generateNestedList(depth, items) {
//     if(depth === 0){
//         return ''
//     }

//     const openTag = `<ul>`
//     const closeTag = `</ul>`
//     let listItems = ''

//     for (let i = 0; i < items; i++) {
//         listItems += `<li>${generateNestedList(depth - 1, items)}</li>`
//     }

//     return `${openTag}${listItems}${closeTag}`
// }


// const nestedList = generateNestedList(2,5)
// console.log(nestedList);