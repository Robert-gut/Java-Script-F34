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

