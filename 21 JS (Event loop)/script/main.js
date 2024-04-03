// console.log('1');
// console.log('2');
// console.log('3');


// setInterval(()=>{}, 1000)
// // setTimeout()

// btn.addEventlister('click', ()=>{console.log('ok');})


// fetch()
// Promise

// const eventBtn = document.querySelector('.plus')

eventBtn.addEventListener('click', ()=>{
  console.log('Привіт я event loop і я почув твою подію');
})

///////////////////////////////////////////

// console.log('CL Start1');

// setTimeout(()=>{
//   setTimeout(()=>console.log('CL stert set tim into'))
// }, 0)

// setTimeout(()=> console.log('CL Start2 setTim'),0)


// Promise.resolve('CL Start3 Promise').then((data) => console.log(data))


// console.log('end');


///////////////////////////////////////////////////

// function one (){
//   throw new error('error')
// }

// function two(){
//   one()
// }

// function three(){
//   two()
// }

// three()


/////////////////////////////////////

// let i = 0

// function foo(){
//   console.log(i);
//   i++
//   foo()
// }

// foo()