// fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then(json => console.log(json))

// ? OBJECTS

//! створення obj

// const obj1 = new Object()
// const obj2 = {}

// console.log('✌️obj1 --->', obj1);
// console.log('✌️obj2 --->', obj2);

//! синтаксис створення obj

//* const objName = {
//*   key: value,
//*   key: value,
//*   key: value,
//*   key: value,
//*   key: value,
//* }


// const car = {
//   name: 'BMW',
//   model: 'm5',
//   age: 2,
//   maxSpeed: 330,
// }
// console.log('✌️car --->', car);

//! отримати дані з obj

// console.log(car.name + ' ' + car.model);//1
// console.log(car['age']);//2
// // //case

// let objKey = 'maxSpeed'

// console.log(car.objKey);
// console.log(car[objKey]);

//! що ми можемо вложувати в obj

// const obj = {
//   str: 'string',
//   number: 999,
//   boolean: true,
//   null: null,
//   und: undefined,
//   arr: [1,2,3],
//   obj: {name: 'test'},
//   fn: function(){console.log('function');}
// }

// console.log(obj.null);
// console.log(obj.arr[1]);
// console.log(obj.obj.name);
// obj.fn()

//? модифікування object
//!1 додавання нових властивостей

// const car = {
//   name: 'BMW',
//   model: 'm5',
//   age: 2,
//   maxSpeed: 330,
// }
// console.log('✌️car --->', car);
// //1 властивісьть
// car.kg = 2100
// console.log('✌️car --->', car);

//obj

// car.engine = {
//   name: 'm57',
//   type: 'disel',
//   power: 350
// }
// console.log('✌️car --->', car);
// console.log('✌️car --->', car.engine.power);

//!2 видалення властивостей

// delete car.maxSpeed
// console.log('✌️car --->', car);

//!3 редагування obj

// car.age = 3
// console.log('✌️car --->', car);


//? копіювання обєктів

// const car = {
//   name: 'BMW',
//   model: 'm5',
//   age: 2,
//   maxSpeed: 330,
// }
// console.log('✌️car --->', car);

// const superCar = car
// console.log('✌️superCar --->', superCar);
// superCar.age = 5

// console.log('✌️car --->', car);

//! як правельно копіювати або метод assign()

// const car = {
//   name: 'BMW',
//   model: 'm5',
//   age: 2,
//   maxSpeed: 330,
// }
// console.log('✌️car --->', car);

// const superCar = Object.assign({}, car)
// superCar.age = 5

// console.log('✌️superCar --->', superCar);
// console.log('✌️car --->', car);

//////////////////////////////////////////////////////////////////////////

// const target = {a: 1, b: 2 }
// const source = {b: 4, c: 5 }
// const source2 = {d: 6, e: 5 }


// const retrnedTarget = Object.assign(target, source, source2, {name: 'test'})
// console.log('✌️retrnedTarget --->', retrnedTarget);

//! перевірку на існування певної властивості  in

// const car = {
//   name: 'BMW',
//   model: 'm5',
//   age2: 2,
//   maxSpeed: 330,
// }
// console.log('✌️car --->', car);

// if('age' in car){
//   console.log(car.age);
// }

//! перебрати обєкт for in

// const car = {
//   name: 'BMW',
//   model: 'm5',
//   age: 2,
//   maxSpeed: 330,
// }
// console.log('✌️car --->', car);

// for(const key in car){
//   console.log(`${key}: ${car[key]}`);
// }

//! методи обєктів або функції в обєктах

// const car = {
//   name: 'BMW',
//   model: 'm5',
//   age: 2,
//   maxSpeed: 330,
//   showInfo: function() {
//     return `${this.name} ${this.model} ${this.maxSpeed}`
//   }
// }

// console.log('✌️car --->', car);

// const info = car.showInfo()
// console.log('✌️info --->', info);

///////////////////////////////////////////////////////////////

// const student1 = {
//   name: 'Anna',
//   age: 20,
// }

// const student2 = {
//   age: 20,
//   nation: 'use',
// }

// const test = Object.assign({}, student1, student2)
// console.log('✌️test --->', test);


