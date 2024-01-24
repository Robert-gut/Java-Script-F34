// if else

// const a = +prompt('enter 1 namber')
// const b = +prompt('enter 2 namber')

// > 
// < 
// >=
// <=

// if(3>4  => f){code----}
// if(3<4  => t){code++++}
// if(true){+++++++++++++}
// if(false){------------}

// if(a > b){
//     alert(`${a} > ${b}`)
// }
// else if(a < b){
//     alert(`${a} < ${b}`)
// }
// else{
//     alert(`${a} = ${b}`)
// }

// ///////////////////////////////////
// ! рівнісьть
// == - рівнісьть по значенню але не по типу даних
// === - 1)тип даних 2) це значення

// const x = '2'
// const y = 2

// console.log('x', typeof x);
// console.log('y', typeof y);

// if(x == y){
//     console.log('True');
// }
// else{
//     console.log('False');
// }

// ////////////////////////////////////////////
//! && - логічне і(and)
//! || - логічне або(or)

// const m = +prompt('enter "m"')
// const n = +prompt('enter "n"')
// const k = +prompt('enter "k"')


// if(m > n && m > k){
//     console.log("m > n and m > k");
// }else if(n > m && n > k){
//     console.log("n > m and n > k");
// }else if(k > n && k > m){
//     console.log("k > n and k > m");
// }else{
//     console.log("m = n = k");
// }


// ///////////////////////////////////////////////////

// const password = prompt('Enter password')
// const confirmPassword = prompt('Enter confirm password')



// if(password.length <= 4 || confirmPassword.length <= 4){
//     console.log('Less then 4');
// }
// else if(password.length >= 16 || confirmPassword.length >= 16){
//     console.log('More then 16');
// }
// else if(password === confirmPassword){
//     console.log('Welcome!');
// }
// else{
//     console.log('Diferent passwords');
// }

// if(password.length <= 4 || confirmPassword.length <=4 || password.length >= 16 || confirmPassword.length >= 16){
//     console.log('More then 16 or Less then 4');
// }

// if(false || true && true ){
//     console.log('ok');
// }

// /////////////////////////////////////////////////////////////

function month() {
    const monthNumber = +document.querySelector('.monthNumber').value
    // console.log(monthNumber);

    if(monthNumber === 1 || monthNumber === 2 || monthNumber === 12){
        console.log('Winter!');
    }else if(monthNumber === 3 || monthNumber === 4 || monthNumber === 5){
        console.log('Spring!');
    }else if(monthNumber >= 6 && monthNumber <= 8){
        console.log('Summer!');
    }else if(monthNumber >= 9 && monthNumber <= 11){
        console.log('Fall');
    }else{
        console.log('Invalid input');
    }
}

// ////////////////////////////////////////////////////////////////////

// if(){}else if(){} else{}

// ! тернальний оператор  (умова ? ifTrue : ifFalse)

const age = +prompt('how old are you')

// if(age >= 18){
//     console.log('Можна голосувати!');
// }else{
//     console.log('НЕможна голосувати!');
// }

age >= 18 ? console.log('Можна голосувати!') : console.log('НЕможна голосувати!')