// !  function 

//* function name(params){
//*     body function
//* }

// ! як викликати фун\

// function showMyName(){
//     console.log('my name is Robert');
// }

// showMyName()
// showMyName()
// showMyName()
// showMyName()

// ! параметри функцій (params)

// function plus(a = 0, b = 0){
//     const result = +a + +b
//     console.log(result);
// }

// plus(5, 5)
// plus(15, 5)
// plus(15, 500)
// plus()
// plus(1)
// plus('10', '10')
// plus('10', true)
// //////////////////////

//! функції вміють вертати результат своєї роботи(return)

// function plus(a, b) {
//     // console.log(a + b);
//     // return a + b
// }
// plus(1, 4)
// * void

// function plus(a, b) {
//     const rus = a + b
//     return rus
//     console.log(rus);
// }


// const sum = plus(5,5)
// console.log('sum => ', sum);


// function name(b) {
//     if (statusCode === 404) {
//         return
//     }
//     console.log();
//     console.log();
//     console.log();
//     console.log();
//     console.log();
//     console.log();

// }

// console.log(name(2));

// ! зона видимості змінних

// const test1 = 'IT'
// let test2 = 'step'

// function scope(params) {
//     console.log(test1 + test2);

//     const test3 = test1 +  test2 + '!!!'
//     return test3
// }

// scope()
// console.log(scope());



// ! змінні в => фун true 
// ! змінні з <= фун false 


// ///////////////////////////////////////////////

const $equal = document.querySelector('.equal')

const $plus = document.querySelector('.plus')
const $minus = document.querySelector('.minus')
const $multiplication = document.querySelector('.multiplication')
const $division = document.querySelector('.division')

$plus.addEventListener('click', plus)
$minus.addEventListener('click', minus)
$multiplication.addEventListener('click', multiplication)
$division.addEventListener('click', division)

function plus() {
    const $a = +document.querySelector('.a').value
    const $b = +document.querySelector('.b').value
    $equal.textContent = $a + $b
}
function minus() {
    const $a = +document.querySelector('.a').value
    const $b = +document.querySelector('.b').value
    $equal.textContent = $a - $b
}

function multiplication() {
    const $a = +document.querySelector('.a').value
    const $b = +document.querySelector('.b').value
    $equal.textContent = $a * $b
}

function division() {
    const $a = +document.querySelector('.a').value
    const $b = +document.querySelector('.b').value
    $equal.textContent = $a / $b
}