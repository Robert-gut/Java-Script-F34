//? Цикли JS

//? While, do While, for , for of, for in, ///(forEach, map)

// console.log('hello');
// console.log('hello');
// console.log('hello');
// console.log('hello');
// console.log('hello');
// console.log('hello');
// console.log('hello');
// console.log('hello');
// console.log('hello');
// console.log('hello');


//! For

//* for(початкове значення; умову(поки умова=== true); крок) {
//*  тіло цикла
//* }

// for(let i = 1; i <= 5; i++){
//     console.log('hello ' + i);
// }

//* 1 <= 5    => true  i++   i = 2
//* 2 <= 5    => true  i++   i = 3
//* 3 <= 5    => true  i++   i = 4
//* 4 <= 5    => true  i++   i = 5
//* 5 <= 5    => true  i++   i = 6
//* 6 <= 5    => false  

// ///////////////////////////////////////////

// const arr = ['Bmw', 'MB', 'Renault', 'Audi', 'Citroen', 'Seat', 'Ferrai']

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// ///////////////////////////////////////////////////////////////
//! вічний цикл

// for(let i = 0; i < 10; i){
//     console.log(i);
// }

// ///////////////////////////////////////////////////////////////

//! WHILE

//* while(умова === true){
//*     тіло циклу
//* }


// let a = 1
// while(a <= 5){
//     console.log(a)
//     a++
// }

//! вічний цикл

// let a = 1
// while(true){
//     console.log(a)
//     a++
// }

//! break - зупиняє цикл

// while(true){
//     let b = 0 
//     b++
//     console.log(b)
//     break
// }

//! знайти факторіал за допомогою цикла

// const factorial = (n) => {
//     if(n < 1){
//         return 0
//     }
//     let result = 1
//     while(n > 0) {
//         result *= n
//         n--
//     }
//     return result
// }

// const number = 10
// const result = factorial(number)
// console.log(`Факторіал числа ${number} дорівнює: ${result}`);

//! do while (спочатку виконується потім перевіряється) 

// let y = 5

// while(y < 5){
//     console.log(y);
// }

// let x = 5
// do {
//     console.log(x);
// } while (x < 5);

// ////////////////////////////////////////////////////////////////

//! for of зручно працює з масивами або колекціями

// const arr = ['Bmw', 'MB', 'Renault', 'Audi', 'Citroen', 'Seat', 'Ferrai']

// //? for
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// //? for of
// for(let auto of arr){
//     console.log('auto: ' + auto);
// }


//! for in зручно працювати з обєктами

// const person = {
//     name: 'Jon',
//     age: 30,
//     isMerried: true,
//     auto: 'VW'
// }

// console.log(person);

// console.log(person.name);
// console.log(person.age);
// console.log(person.isMerried);
// console.log(person.auto);

// for(let key in person){
//     console.log(`${key}: ${person[key]}`);
// }


// ///////////////////////////////////////////////////////

// const multiplicationTable = () => {
//     const number = +prompt('Enter number')
//     if(!isNaN(number)){
//         for(let i = 1; i <= 10; i++){
//             console.log(`${number} * ${i} = ${i*number}`);
//         }
//     } else{
//         alert('Enter numvers, not symbols')
//         multiplicationTable()
//     }
// }

// multiplicationTable()


// ////////////////////////////////////////////////////////

function sum() {
    let total = 0
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i]
    }
    return total
}

console.log(sum(1,2,3,4,5));



