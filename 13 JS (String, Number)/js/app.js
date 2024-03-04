//? String

// const str1 = 't`est "and" t`est'
// const str2 = "t`est 'and' t`est"
// const str3 = `'test' "test" ${1+2+3} 'test'`
// console.log('✌️str3 --->', str3);

//! ``
// const str4 = 
// `
// test
//             test
//                             test
// `
// console.log('✌️str4 --->', str4);

// function test (){
//   return 1 + 1
// }

// const str5 = `test ${str4}, ${Math.random()}, ${test()}`
// console.log('✌️str5 --->', str5);

//! спец символи 

// const str6 = '\t test \0 \'te\'st\' test test \\ test\n\t test test'
// console.log('✌️str6 --->', str6);

//! Юнікод символи

// const str7 = 'str ♫ \u00A9 \u8599 ✎'
// console.log('✌️str7 --->', str7);

//! Довжи str

// const str8 = 'test'
// console.log('✌️str8 --->', str8.length);

//! як получіти певний символ строки

// const str9 = 'test'
// console.log('✌️str9 --->', typeof str9);
// console.log('✌️str9 --->', str9);

// console.log('✌️str9 --->', str9[0]);
// console.log('✌️str9 --->', str9[1]);
// console.log('✌️str9 --->', str9[2]);
// console.log('✌️str9 --->', str9[3]);

// console.log('✌️str9 --->', str9[str9.length - 2]);

// for (let index = 0; index < str9.length; index++) {
//   console.log(str9[index]);
// }

//! регістер в string

// const str10 = 'Test'
// const str10test = 'teSt'

// if(str10.toLowerCase() === str10test.toLowerCase()){
//   console.log('OK');
// }

// console.log('✌️str10 --->', str10.toUpperCase());
// console.log('✌️str10 --->', str10.toLowerCase());


//! пошук в str

// const text = 'Lorem ipsum dolor sit amet.'

//!  indexOf => return index or -1
// console.log(text.indexOf('test'));//-1
// console.log((text.indexOf('dolor')));//12
// console.log((text.indexOf('dolor', 13)));//-1

// //! includes => true or false 
// console.log(text.includes('sit'));//true
// console.log(text.includes('sitds'));//false
// console.log(text.includes('sit', 15));//false

// //!startWith and endsWith => true or false
// console.log(text.startsWith('ipsum'));//false
// console.log(text.startsWith('Lorem'));//true
// console.log(text.startsWith('ipsum'));//false
// ///////////////////////////////////////////////

// console.log(text.endsWith('Lorem'));//false
// console.log(text.endsWith('amet.'));//true

// //! slice(start, end)

// console.log(text.slice(0, 5));
// console.log(text.slice(6, 11));
// console.log(text.slice(12));


//? Number

// const num1 = 5
// const num2 = 5.2345
// // const num3 = 02345
// const num4 = 1_000_000
// console.log('✌️num3 --->', num4);

// //!  що таке 'e' в number

// const num5 = 5000000000
// console.log('✌️num5 --->', num5);

// const num6 = 5e9
// console.log('✌️num6 --->', num6);

//? Math
//! округлення 

// //*в меншу сторону floor()
// console.log('5.9238745 --->', Math.floor(5.9238745));
// console.log('-5.9238745 --->', Math.floor(-5.9238745));

// //*в більшу сторону ceil()
// console.log('5.138745 --->', Math.ceil(5.138745));
// console.log('-5.138745 --->', Math.ceil(-5.138745));

// //* до найближчого цілого числа round()
// console.log('5.49 --->', Math.round(5.49));
// console.log('5.51 --->', Math.round(5.51));
// console.log('5.5 --->', Math.round(5.5));

// //* округлення до певної кількості після коми toFixed()

// console.log('5.9238745 --->', +5.9238745.toFixed(2));
// console.log('-5.9238745 --->', -5.9238745.toFixed(2));

// //! проблеми не точностей 
// console.log(0.1 + 0.2 === 0.3);
// console.log(0.1 + 0.2);

// //! перевірка на нормальне значення

// console.log(145 + +'test');
// console.log(145 + Number('test'));

// console.log(isNaN(145 + +'test'));
// console.log(Number(145 + +'test'));

// if(145 + +'test' === NaN){
//   console.log('Ok');
// }

// if(isNaN(145 + +'test')){
//   console.log('Ok');
// }

// //! перевірка на число

// console.log(isFinite('145.345'));
// console.log(isFinite('145lksdjfhg'));
// console.log(isFinite(145));
// console.log(isFinite(true));
// console.log(isFinite(false));

//! parsInt and parsFloat

// console.log('960');
// console.log(+'960');
// console.log(Number('960'));

// console.log('960px');
// /////////////////////////////////////
// console.log(parseInt('960px') - 800);

// console.log(parseInt('960px'));
// console.log(parseFloat('960px'));
// //////////////////////////////////////////
// console.log(parseInt('12.99px'));
// console.log(parseFloat('12.89px'));
// console.log(Math.ceil(parseFloat('12.89px')));
// console.log(Math.floor(parseFloat('12.89px')));
// console.log(Math.round(parseFloat('12.89px')));


//! Math

//* псевдо рандомне число random()

// console.log(Math.random());// 0 to 1
// console.log(Math.random());// 0 to 1
// console.log(Math.random());// 0 to 1
// console.log(Math.random());// 0 to 1
// console.log(Math.random());// 0 to 1
// console.log(Math.random());// 0 to 1

// // 0 to 10
// console.log(Math.floor(Math.random() * 10));
// console.log(Math.floor(Math.random() * 10));
// console.log(Math.floor(Math.random() * 10));
// console.log(Math.floor(Math.random() * 10));
// console.log(Math.floor(Math.random() * 10));

// //0 to 100000
// console.log(Math.floor(Math.random() * 100000));
// console.log(Math.floor(Math.random() * 100000));
// console.log(Math.floor(Math.random() * 100000));
// console.log(Math.floor(Math.random() * 100000));
// console.log(Math.floor(Math.random() * 100000));

//* max() min()
const arr = [1, 12, 34, 64, 2, 122, 345]

console.log(Math.max(1,2,3));
console.log(Math.max([]));//NaN
console.log(Math.max(1, 12, 34, 64, 2, 122, 345));

console.log(Math.max(...arr));
console.log(Math.min(...arr));

//abs()
console.log(-111);
console.log(Math.abs(-111));
console.log(Math.abs(111));

//степінь pow()
console.log(Math.pow(2, 2));
console.log(Math.pow(2, 3));
console.log(Math.pow(3, 3));


console.log(Math.PI);
