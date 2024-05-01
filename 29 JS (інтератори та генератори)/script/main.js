//! інтератор - next()
//! {value: 12, done: false;}

//! генератор - функція  function* => yeild

function* generate(){
  yield 1
  yield 'test'
  yield true
  yield false
  yield new Data()
}

const insGenerate = generate()


console.log(insGenerate.next());
console.log(insGenerate.next());
console.log(insGenerate.next());
console.log(insGenerate.next());
console.log(insGenerate.next());
console.log(insGenerate.next());


// function* generateNumbers(){
//   for (let i = 1; i <= 5; i++) {
//     yield i
//   }
// }

// const numbers = generateNumbers()

// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next().value);
// console.log(numbers.next().done);
// console.log(numbers.next());


// function* infiniteNumbers(){
//   let i = 1
//   while(true){
//     yield i
//     i++
//   }
// }

// const numbers1 = infiniteNumbers()

// console.log(numbers1.next());
// console.log(numbers1.next());
// console.log(numbers1.next());
// console.log(numbers1.next());
// console.log(numbers1.next());

