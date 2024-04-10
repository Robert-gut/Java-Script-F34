// setTimeout(()=>{
//   console.log('Request num 1');
//   setTimeout('Request num 2')
// },2000)

// ////////////////////////////////////////////////
// const body = document.querySelector('body')
// const promise = new Promise(function(resolve, reject) {
//   setTimeout(()=>{
//     console.log('Start process...');
//     resolve()//успішне виконання
//     // reject('Bed idea!')//помилка
//   },2000)
// })
// .then(()=>{
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       const car = {
//         brend: 'Tesla',
//         model: 'x'
//       }
//       console.log('You wont to buy: ', car.brend, car.model);
//       // reject('Not enough money!')
//       resolve(car)
//     },2000)
//   })
// })
// .then(car => {
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       console.log('CTO checking...')
//       const carWithTechStatus = {
//         ...car,
//         techStatus: 'checked'
//       }
//       console.log('Technical status: ', carWithTechStatus.brend, carWithTechStatus.model, carWithTechStatus.techStatus);
//       resolve(carWithTechStatus)//ok
//       // reject('Technical status bad!')//not ok
//     },2000)
//   })
// })
// .then(car => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Polece checking...');
//       const carWithPoliceStatus = {
//         ...car,
//         policeStatus: 'checked'
//       }
//       console.log('Police status: ',carWithPoliceStatus.brend, carWithPoliceStatus.model, carWithPoliceStatus.policeStatus);
//       // resolve(carWithPoliceStatus)//ok
//       reject('Police status bad!')//not ok
//     },2000)
//   })
// })
// .then(car => {
//   return new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//       console.log('Car status...')
//       const carWithFinalStatus ={
//         ...car,
//         status: 'bought'
//       }
//       console.log('Car status: ', carWithFinalStatus.status);
//       resolve(carWithFinalStatus)
//       // reject('opsss!')
//     },2000)
//   })
// })
// .catch((err)=>{
//   console.error(err);
// })
// .finally(() => console.log('Finish process.'))


/////////////////////////////////////////////////////

// const test = (a, b) => {
//   const test = a + b
//   return test 
// }

// const test = (a, b) => a + b 
// console.log(test(3, 3));



// const data = fetch('https://google.com/font')

// console.log(data);
////////////////////////////////////////

function createPromise(value){
  return new Promise((resolve, reject) =>{
    resolve(value);
  })
}

createPromise('hello')
  .then((value) => {
    console.log(value);
  })
  .catch(err => {
    console.log(err);
  })