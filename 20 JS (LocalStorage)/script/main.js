//! LS

const frontEnd = 'fron end 34'
const age = 1

//!1 записати дані setItem()

localStorage.setItem('group', frontEnd)
localStorage.setItem('group1', frontEnd)
localStorage.setItem('age', age)

//* що буде як записувати дані одні ітіж самі
localStorage.setItem('group', 'test')

//!2 подлучіти дані getItem()

console.log(localStorage.getItem('group'));
console.log(localStorage.getItem('age'));
console.log(typeof localStorage.getItem('age'));

console.log(localStorage.getItem('test'));//null

//!3 видалення певного item   removeItem()
// localStorage.removeItem('group1')

//!4 видалити все що є в LS .clear()

localStorage.clear()


/////////////////////////////////////////////////////

// ! obj

const frontEnd1 = {
  group: 'front end 34',
  age: 1
}

localStorage.setItem('obj1', frontEnd1)
console.log(localStorage.getItem('obj1'));
/////////////////////////////////////

localStorage.setItem('obj2', JSON.stringify(frontEnd1))
console.log(localStorage.getItem('obj2'));
console.log(typeof localStorage.getItem('obj2'));

////////////////////////////////////////////

const objStr = localStorage.getItem('obj2')
console.log('✌️objStr --->', objStr);
console.log('✌️objStr --->', typeof objStr);

const cours = JSON.parse(objStr)
console.log('✌️cours --->', cours);


const obj = JSON.parse(localStorage.getItem('obj2'))
console.log('✌️obj --->', obj);
