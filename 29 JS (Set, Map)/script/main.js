//? Set , Map

//? Set - це аналог [], тільки унікальні значення

const mySet = new Set()//створення SEt

//! add() - додавання нових значень в set
mySet.add('apple')
mySet.add('orange')
mySet.add(1)
mySet.add(true)
mySet.add(false)

mySet.add('apple')//буде проігноровано бо apple вже існує

//! size - властивіть показує к-ть елементів
// console.log(mySet.size);

//! has() - перевірка чи містить set певне значення => boolean
// console.log(mySet.has('apple'));
// console.log(mySet.has('banana'));

//? інтерації
//!1 за допомогою метода forEach()
// mySet.forEach(value => console.log(value))

//!2 за допомогою for...of
// for (const value of mySet) {
//   console.log(value);
// }
//?.......

//! delete() - видалення значень в set => boolean
// console.log(mySet.delete(1));//true
// console.log(mySet.delete(12344));//false
// console.log(mySet.delete(false));//true

//! clear() - видалення всіх занчень з set
// mySet.clear()

// console.log('✌️mySet --->', mySet);

//! values() - отримання ітератора

// const myValues = mySet.values()
// console.log('✌️myValues --->', myValues);

// for (const value of myValues) {
//   console.log(value);
// }


//! перетворення set в []

// const myArray = [...mySet]
// console.log('✌️myArray --->', myArray);


/////////////////////////////////////////////////

// const numbers = [1,2,3,3,3,4,4,5,6,7,8,8,9]
// console.log('✌️numbers --->', numbers);
// const uniqueNumbers = new Set(numbers)
// console.log('✌️uniqueNumbers --->', uniqueNumbers);
// const arr = [...uniqueNumbers]
// console.log('✌️arr --->', arr);

/////////////////////////////////////////////////////
// const numbers1 = [1,2,3,3,3,444,34,76,87,89,4,4,5,6,7,8,8,9]
// const numbers2 = [1,2,3,3,3,4,5,5,6,76,87,4,5,6,7,8,8,9]

// const combinedSet = new Set([...numbers1, ...numbers2].sort())
// console.log('✌️combinedSet --->', [...combinedSet].sort());


//? Map - аналогом {}, унікалький ключ а значення можуть повторюватися

const myMap = new Map()// створення Map

//! set() - додавання нових пар ключ-значення
myMap.set('name', 'John Doe')
myMap.set('age', 30)
myMap.set('city', 'Kyiv')

myMap.set('city', 'Lviv')

//! size - показує к-ть елементів в Map
// console.log(myMap.size);

//! get() - отримання значення за ключем
// console.log(myMap.get('name'));
// console.log(myMap.get('age'));
// console.log(myMap.get('country'));//undefined

//! has() - перевірка чи містить Map певний ключ => boolean
// console.log(myMap.has('name'));//true
// console.log(myMap.has('country'));//false

//! delete() - видаляє пару ключ-значення  => boolean
// console.log(myMap.delete('age'));//true
// console.log(myMap.delete('country'));//false

//! clear() - видаляє всі пари ключ-значення з Map
// myMap.clear()
console.log('✌️myMap --->', myMap);

//? Інтерації по Map (keys(), values(), entries())

//! цикл for..of  keys() - получаємо ключи
// for (const key of myMap.keys()) {
//   console.log(key);
// }

// //! цикл for..of  values() - получаємо value
// for (const value of myMap.values()) {
//   console.log(value);
// }

// //! цикл for...of entries() - value key
// for (const [key, value] of myMap.entries()) {
//   console.log(key, ':', value);
// }


////////////////////////////////////////////////////////////

// myMap.forEach((value, key) => {
//   console.log(`Key: ${key}, Value: ${value}`);
// })

//////////////////////////////////////////////////////////

const myObj = {}
myMap.forEach((value,key) => myObj[key] = value)

console.log('✌️myObj --->', myObj);
Object.keys(myObj).forEach(v => console.log(v))

