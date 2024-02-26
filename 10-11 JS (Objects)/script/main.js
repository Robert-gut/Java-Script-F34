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


// ///////////////////// day 2/////////////////////////

// function nullOrUndefined(object) {
//   for (const key in object) {
//     if(object[key] === null || object[key] === undefined){
//       return true
//     }
//   }
//   return false
// }

// const test = {
//   key1: 'test',
//   // key2: undefined
// }

// console.log(nullOrUndefined(test));


// const test = {}

// function naem(obj){

//   for (const key in object) {
//   return 'not emty'
//   }
//   return 'emty'
// }


// const test = [
//   {name: 'B', age: 23},
//   {name: 'A', age: 2},
//   {name: 'D', age: 45},
//   {name: 'C', age: 12},
// ]

// function sort(array, property){
//   const res =  array.sort((a, b) => b[property].localeCompare(a[property]))
//   return res
// }

// console.log(sort(test, 'name'));

//? про методи обєктів і про копіювання

// const car = {
//   name: 'MB',
//   model: 'gla',
//   maxSpeed: 250
// }

//* не працює
// const car2 = car
// car2.maxSpeed = 100
// console.log('✌️car2 --->', car2);
// console.log('✌️car --->', car);

//* object.assign() великий мінус

// 1

// const car2 = Object.assign({}, car)
// car2.maxSpeed = 100
// console.log('✌️car --->', car);
// console.log('✌️car2 --->', car2);

//2 

// const car3 = {...car}
// car3.maxSpeed = 10
// console.log('✌️car3 --->', car3);
// console.log('✌️car --->', car);

// ! мінуси ціх варянтів

// const car = {
//   name: 'MB',
//   model: 'gla',
//   maxSpeed: {
//     km: 320,
//     ml: 200
//   }
// }


// 1
// const car2 = Object.assign({}, car)
// car2.maxSpeed.km = 100
// console.log('✌️car --->', car);
// console.log('✌️car2 --->', car2);

//2 
// const car3 = {...car}
// car3.maxSpeed.km = 10
// console.log('✌️car3 --->', car3);
// console.log('✌️car --->', car);

//! глибоке копіюванн 

// const car = {
//   name: 'MB',
//   model: 'gla',
//   maxSpeed: {
//     km: 320,
//     ml: 200
//   }
// }

// const newCarJson = JSON.stringify(car)
// console.log('✌️car --->', car);
// console.log('✌️newCarJson --->', typeof newCarJson);
// console.log('✌️newCarJson --->', newCarJson);

// const newCar = JSON.parse(newCarJson)
// newCar.maxSpeed.km = 999
// console.log('✌️newCar --->', newCar);
// console.log('✌️newCar --->', typeof newCar);

//* скоречена запис
// const newCar = JSON.parse(JSON.stringify(car))
// newCar.maxSpeed.km = 999


// console.log('✌️newCar --->', newCar);
// console.log('✌️car --->', car);

//! з чим не працює

// const car = {
//   name: 'MB',
//   model: 'gla',
//   maxSpeed: {
//     km: 320,
//     ml: 200
//   },
//   productionYear: new Date('2018-05-12')
// }

// const newCar = JSON.parse(JSON.stringify(car))


// console.log('✌️car --->', car.productionYear.getDay());
// console.log('✌️newCar --->', newCar.productionYear.getDay());


//! екстрений варянт 

// const newCar = structuredClone(car)
// newCar.maxSpeed.km = 12

// console.log('✌️car --->', car.productionYear.getTime());
// console.log('✌️newCar --->', newCar.productionYear.getFullYear());

// console.log('✌️car --->', car);
// console.log('✌️newCar --->', newCar);

//? мотоди object()

const car = {
  name: 'MB',
  model: 'gla',
  maxSpeed: {
    km: 320,
    ml: 200
  },
}

//!  Object.keys()
const objKey = Object.keys(car)
console.log('✌️objKey --->', objKey);

//! Object.values()
const objValues = Object.values(car)
console.log('✌️objValues --->', objValues);

//! Object.entries()
const objectEntries = Object.entries(car)
console.log('✌️objectEntries --->', objectEntries);

//! object.defineProperty()

const objectProperty = Object.defineProperty(car, 'clearance', {
  value: 35
})
console.log('✌️objectProperty --->', objectProperty);
console.log('✌️objectProperty --->', objectProperty);

