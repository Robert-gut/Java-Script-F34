//? Масиви

//! Створення масива

// const array = new Array()
// const array = []

// console.log(array);

//! синтаксис і наповнення масива

// const arrNumbers = [1, 2, 3]

// const arrType = [
//     1,
//     'str',
//     true,
//     null,
//     undefined,
//     function() {
//         return 1
//     },
//     [1,2,3],
//     {name: 'Rob'},
// ]

// console.log(arrType)

//! як отримати певне значення з масива

// console.log(arrNumbers[0])
// console.log(arrNumbers[1])
// console.log(arrNumbers[2])

// console.log(arrType[2])
// console.log(arrType[3])
// console.log(arrType[5]())
// console.log(arrType[6][2])
// console.log(arrType[7].name)

// console.log(arrType[8]);

//! індексація

// const matrix = [[1, 2, 3],[4, 5, 6],[7, 8, 9],]

// console.log(matrix[1][2])

//! довживжина масива

// console.log(matrix.length);

//! копіювання масивів

// const arr = [1, 2, 3]

// const newArr = arr


// arr[2] = 999

// console.log('arr=> ' + arr);
// console.log('newArr=> ' + newArr);

//! Змінюємо значення в масивах

// const arr = [1, 2, 3]
// console.log(arr);

// arr[1] = 999
// console.log(arr);

// //* нове значення
// arr[3] = 4
// arr[4] = 6

// arr[arr.length] = 10
// console.log(arr);

//? методти масива
//* додавання елементів в масив
//! додавання ел в КІНЕЦЬ масива push()

// const cars = ['Bmw', 'Audi', 'MB']
// console.log(cars);

// cars.push('Skoda')
// console.log(cars);

// cars.push('Porshe', 'Renault')
// console.log(cars);

//! додавання ел в ПОЧАТОК! масива unshift()

// const cars = ['Bmw', 'Audi', 'MB']
// console.log(cars);

// cars.unshift('Skoda')
// console.log(cars);

// cars.unshift('Porshe', 'Renault')
// console.log(cars);

//* видалення елементів з масива
//! видалення ел з КІНЦЯ масива - pop()

// const cars = ['Porshe', 'Renault', 'Skoda', 'Bmw', 'Audi', 'MB']
// console.log(cars);

// cars.pop()
// cars.pop()
// cars.pop()
// console.log(cars);

//! видалення ел з ПОЧАТКУ масива - shift()

// const cars = ['Porshe', 'Renault', 'Skoda', 'Bmw', 'Audi', 'MB']
// console.log(cars);

// cars.shift()
// cars.shift()
// cars.shift()
// console.log(cars);





// ////////////////////////////// DAY 2   //////////////////////////////////

//* ЗАМІНА, ВИДАЛЕННЯ, ДОДОВАННЯ ЕЛЕМЕНТА В ПЕВНИЙ ІНДЕКС 

// const cars = ['Porshe', 'Renault', 'Skoda', 'Bmw', 'Audi', 'MB']
// console.log(cars);
// cars[3] = 1
// console.log(cars);
// delete cars[1]
// console.log(cars);
// console.log(cars[1]);


//! Метод масива splice()
// (start ind, delete , ...[++++])

// const cars = ['Porshe', 'Renault', 'Skoda', 'Bmw', 'Audi', 'MB']
// console.log(cars);

//? видаляти ел по індексу

// cars.splice(2, 1)
// console.log(cars);

// cars.splice(2, 2)
// console.log(cars);

//* вертає видалений елемент
// const test = cars.splice(3, 2)
// console.log(test);
// console.log(cars);

//? додавання ел по індексу

// cars.splice(3, 0, 'Ford', 'SAB')
// console.log(cars);

//? заміна ел по індексу
// cars.splice(3, 2, 'Ford', 'SAB')
// console.log(cars);

//? ел з кінця
// cars.splice(-1, 1)
// console.log(cars);
// ///////////////////////////////////
//! копіювання 
//! slice() vs splice()
//! slice() => Ctrl + c
//! splice() => Ctrl + x

// ///////////////////////////////////

//! Метод масива slice() копіювання масива

// const cars = ['Porshe', 'Renault', 'Skoda', 'Bmw', 'Audi', 'MB']
// console.log(cars);

// const test = cars.slice()
// test.push('TEST')
// console.log(test);
// console.log(cars);

// const test = cars.slice(0, 3)
// console.log(test);
// console.log(cars);


// з кінця
// const test = cars.slice(-3, -1)
// console.log(test);

// весь масив

// const test = cars.slice(0, cars.length)
// console.log(test);

//! Метод масива concat() копіювання масива з додаванням нових елементів

// const cars = ['Porshe', 'Renault', 'Skoda', 'Bmw', 'Audi', 'MB']
// console.log(cars);

// const newCars = cars.concat('Ford', 'SAB')
// console.log(newCars);

//! slice() vs concat()
//! slice() === concat()  повнісьтю копіюють масив
//! slice(start, end) <= concat(----)  копіює частину масива
//! slice(-----) => concat('test1', 'test2') додавати нові елементи

// const cars2 = ['Ford']
// const cars3 = ['SAB']

// const newCars = cars.concat(cars2, cars3)
// console.log(newCars);


//! пошук в масиві
// const cars = ['Porshe', 'Renault', 'Skoda', 'Bmw', 'Audi', 'MB', 'Renault']
// console.log(cars)

//? indexOf() вертає ІНДЕКС першого знайденого елемента

// console.log(cars.indexOf('MB'));
// console.log(cars.indexOf('MBtest'));//--- -1
// console.log(cars.indexOf('Renault', 1));
// console.log(cars.indexOf('Porshe', 4));

//? lastIndexOf() вертає ІНДЕКС першого знайденого елемента еле шукає з кінця

// console.log(cars.lastIndexOf('Renault'));

// ///////////////////////////////////////////////////

//? includes() вертає true and false

// console.log(cars.includes('Renault'));
// console.log(cars.includes('Skoda', 3));


//? find and findIndex and filter



//! find() вертає цілий перший найдений обєкт

// const cars = [
//     {name: 'MB', cost: 100000},
//     {name: 'BMW', cost: 150000},
//     {name: 'Audi', cost: 200000},
// ]


// console.log(cars.find((item) => {return item.cost === 150000}));//{}
// console.log(cars.find((item) => {return item.cost === 150000}));//undefined


// //! findIndex() вертає ІНДЕКС перший найдений обєкта

// console.log(cars.findIndex(item => item.cost !== 100000));//1
// console.log(cars.findIndex(item => item.cost === 180000));// -1

// //! filter() вертає ВСІ обєкти які відповідають умові 

// console.log(cars.find(item => item.cost > 90000)); //1 перша машина
// console.log(cars.filter(item => item.cost > 90000));//всі машини


// ////////////////////////////////////////////////////////

// function finds(array) {
//   let val = array[0]
//   let indexVal = [0]
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] < val) {
//       val = array[i]
//       indexVal = [i]
//     } else if (array[i] === val){
//       indexVal.push(i)
//     }
//   }
//   return indexVal
// }

// const c = [12, 12, 34, 56, 5, 66, 5, 45, 5]
// console.log(finds(c));

// ////////////////////////////////////////////////////////

//! сортування мисива

//? sort()

//String
// const cars = ['Porshe', 'Renault', 'Skoda', 'Bmw', 'Audi', 'MB', 'Renault']
// console.log(cars)

// const test = ['d', 'b', 'a', 'c' ]
// const test2 = ['г', 'в', 'б', 'а' ]

// console.log(cars.sort());
// console.log(test.sort());
// console.log(test2.sort());

// //number

// const num = [9, 8, 7, 5, 6, 4, 3, 1]

// console.log(num.sort());
// console.log(num.sort((a, b) => {
//   // if(a > b) return -1
//   // if(b > a) return 1
//   return b - a
// }));

//? revers
// const cars = ['Porshe', 'Renault', 'Skoda', 'Bmw', 'Audi', 'MB', 'Renault']
// console.log(cars)

// console.log(cars.reverse());


//! Модифікування масива

//? map() - проходиться по кожнуму ел і вертає новий модифікований масив

// const cars = ['Porshe', 'Renault', 'Skoda', 'Bmw', 'Audi', 'MB', 'Renault']
// console.log(cars)


// console.log(cars.map(item => {return item.toUpperCase()}));

// const carsToUpperCase = cars.map(item => item.toUpperCase())

// console.log(carsToUpperCase);

//? split - розділяє строку по знач в масив

// //numbers
// const numStr = '12,12,34,56,5,66,5,45,5'
// console.log('✌️numStr --->', numStr);

// const numArr = numStr.split(',')
// console.log('✌️numArr --->', numArr);

// // string

// const lorem = 'Lorem ipsum dolor sit amet'
// console.log('✌️lorem --->', lorem);

// const loremArr = lorem.split(' ')
// console.log('✌️loremArr --->', loremArr);



//? join() - робить з масива строку

// const cars = ['Porshe', 'Renault', 'Skoda', 'Bmw', 'Audi', 'MB', 'Renault']
// console.log(cars)

// console.log(cars.join());
// console.log(cars.join('+-+'));
// console.log(cars.join('          '));

// const carsStr = cars.join(' ')
// console.log('✌️carsStr --->', carsStr);

//! перевірка на масив Array.isArray()

// const array = []
// const object = {}
// const string = ''
// const number = NaN

// console.log(typeof array);
// console.log(typeof object);
// console.log(typeof string);
// console.log(typeof number);

// function isArr(arr) {
//   if (Array.isArray(arr)) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(isArr(string));
// console.log(isArr(number));
// console.log(isArr(array));
// console.log(isArr(object));

// Array.isArray(array)? console.log(true): console.log(false)

//! Метод циклу  forEach() або як перебрати масив

// const cars = ['Porshe', 'Renault', 'Skoda', 'Bmw', 'Audi', 'MB', 'Renault']
// console.log(cars)

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i])
// }

// for (const iterator of cars) {
//   console.log(iterator);
// }


// //////////////////////////////////////////////////////////////////////
// const forEach =  cars.forEach((item, index, array) => {
//   return `forEach ${item} => ${index} => ${array}`
// })

// const map = cars.map((item ,index, array) => {
//   return `map ${item} => ${index} => ${array}`
// })

// console.log('✌️forEach --->', forEach);
// console.log('✌️map --->', map);
// //////////////////////////////////////////////////////////////////////

//! reduce()

// const num = [1,2,4,5,6,7,8,879,67,564,546,34]
// console.log('✌️num --->', num);

// const reduce = num.reduce((previousValue, item, index, array) => {
//   return previousValue + item
// }, 0)

// console.log('✌️reduce --->', reduce);

