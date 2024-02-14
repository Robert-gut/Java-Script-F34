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

const cars = [
    {name: 'MB', cost: 100000},
    {name: 'BMW', cost: 150000},
    {name: 'Audi', cost: 200000},
]


console.log(cars.find((item) => {return item.cost === 150000}));//{}
console.log(cars.find((item) => {return item.cost === 150000}));//undefined


//! findIndex() вертає ІНДЕКС перший найдений обєкта

console.log(cars.findIndex(item => item.cost !== 100000));//1
console.log(cars.findIndex(item => item.cost === 180000));// -1

//! filter() вертає ВСІ обєкти які відповідають умові 

console.log(cars.find(item => item.cost > 90000)); //1 перша машина
console.log(cars.filter(item => item.cost > 90000));//всі машини