// ? оператори 

// ! матиматичні оператори

// console.log('Додаваненя', 1 + 1);
// console.log('Віднімання', 2 - 1);
// console.log('Множення', 2 * 2);
// console.log('Ділення', 4 / 2);
// console.log('Остача від ділення', 5 % 2);
// console.log('Степінь', 3 ** 3);


// ! матиматичні оператори з різними типами даних

// console.log('yes' + ' or' + ' not');
// console.log('Number ' + 2);//приведеться до string
// console.log('4' + 2);//приведеться до string
// console.log('4' + 2 + true);//приведеться до string
// console.log(2 + true);

// console.log(2 * '10');
// console.log(2 * 'test');

// ! Унарний оператор +

// console.log(+'245');
// console.log(+'400');
// console.log(+'test');
// console.log(+true);
// console.log(+false);
// console.log(+undefined);
// console.log(+null);


// ! оператор присвоєння =

// const pi = 3 + 0.14
// console.log(pi);

// ! оператори скорочення

// let a = 1
// a = a + 5
// console.log(a);

// let b = 10

// console.log(b += 1);
// console.log(b -= 1);
// console.log(b *= 2);
// console.log(b /= 2);

// ! інкремент і декремент

// * інкрементн ++1

// let c = 10
// c = c + 1
// c += 1 
// console.log(c);

// let d = 100
// console.log(d);
// d++//інкремент
// d++//інкремент
// d++//інкремент
// console.log(d);

// * декремент --1

// let i = 111
// console.log(i);
// i--//декремент
// console.log(i);


// ! постфікс і префіксне розмщення

// * постфіксне розміщення
// let f = 999
// console.log(f++);
// console.log(f);

// * префіксне розміщення
// let f = 999
// console.log(++f);
// console.log(f);

//! оператори порівняння (boolean)

//* >
//* <
//* <=
//* >=
//* == рівнісьть
//* === сувора рівнісьть (по типам)
//* != НЕ рівнісьть
//* !== НЕ сувора рівнісьть (по типам)

// console.log(1 > 2);
// console.log(1 < 2);

// console.log(1 == 2);
// console.log(2 == 2);

// console.log(1 != 2);
// console.log('2' !== 2);


// ! порівняння різних типів даних 

// console.log('2' > 1);
// console.log('2' == 1);

// console.log(true == 1);
// console.log(false == 0);

// console.log(1 === true);
// console.log(1 !== true);

// console.log(undefined == null);
// console.log(undefined === null);

// console.log(undefined == 1);
// console.log(null == 1);

// console.log('a' === 'a');
// console.log('A' < 'a');
// console.log('b' > 'a');
// console.log('abc' === 'abc');
// console.log('abc' < 'abc     ');

// ! логічне // or  і логічне and &&

// * || або
// console.log(true || true);
// console.log(false || true);
// console.log(false || false);
// console.log(false || true || false || false);

// * && і 
// console.log(true && true);
// console.log(true && false);
// console.log(true && true && 1 === 2 && true && true && true && true);

//! тернальний оператор
// let a = 1

// 2 === a ? console.log('a === 1') : console.log('a !== 1');
// умова ? true : false

// ! if else
// if(a === 1){
//     console.log('a === 1')
// }else{
//     console.log('a !== 1')
// }



//! switch

// const j = 'test1'


// switch (j){
//     case 'test1':
//         console.log(1);
//         break
//     case 2:
//         console.log(2);
//         break
//     default:
//         console.log(999);
// }

function month() {
    const monthNumber = document.querySelector('.monthNumber').value
    switch (monthNumber){
        case '1':
        case '2':
        case '12':
            console.log('Winter')
            break
        case '3':
        case '4':
        case '5':
            console.log('Spring');
            break
        case '6':
        case '7':
        case '8':
            console.log('Summer');
            break
        case '9':
        case '10':
        case '11':
            console.log('Fall');
            break
        default:
            console.log('error');
    }   
}



const select = document.getElementById('bgc')
const bg = document.querySelector('body')

select.addEventListener('change', function(){
    const selectedValue = select.value
    switch (selectedValue) {
        case 'green':
            bg.style.backgroundColor = 'green'
            break
        case 'blue':
            bg.style.backgroundColor = 'blue'
            break
        case 'yellow':
            bg.style.backgroundColor = 'yellow'
            break
        default:
            bg.style.backgroundColor = 'red'
    }
})


const a = 1

if (typeof a === 'number'){
    
}