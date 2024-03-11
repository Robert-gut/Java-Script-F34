//? DOM day2

//! перенос ел

// const li4 = document.querySelector('#li4')
// const li6 = document.querySelector('[name="li6"]')

// li6.after(li4)
// li6.before(li4)

//! копіювання ел

// const ol = document.querySelector('ol')

// const copy_01 = ol.cloneNode()
// const copy_02 = ol.cloneNode(true)//копі в глибину

// ol.after(copy_01)
// ol.after(copy_02)

//! видалення ел
// ol.innerHTML = ''

// const li6 = document.querySelector('[name="li6"]')
// li6.remove()

//? керувати css and class

//! керування class

const ol = document.querySelector('ol')

//* className
// console.log(ol.className);// всі імена класів

// ol.className = ol.className + ' test'//змінювати всі імена класів
// console.log(ol.className);// всі імена класів
/////////////////////////////////////////////////////
//* classList

// console.log(ol.classList);

// ol.classList.add('red', 'size')//! добавляння класів +++

// ol.classList.remove('items', 'items2')//! видалення класів ---

// ol.classList.toggle('red')//! ++++ ----
// //! видаляє якщо такий клас є і добавля якщо його не має

// console.log(ol.classList.contains('red'));//true
// console.log(ol.classList.contains('blue'));//false
//! якщо даний клас є тоді верта true якщож не має тоді false


//? style редагавання

const h1 = document.querySelector('h1')
// console.log(h1.style);

h1.style.fontSize = '65px'
h1.style.textAlign = 'center'
h1.style.color = 'blue'
h1.style.fontFamily = `'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif`


//! cssText

const h2 = document.querySelector('h2')

h2.style.cssText = `
  font-size: 35px;
  color: red;
  text-align: center;
`

//! getComputedStyle() получаємо значення певний властивостей даного елемента

// console.log(h1.style.margin);
// console.log(getComputedStyle(h1).margin)
// console.log(parseInt(getComputedStyle(h1).marginTop) + 20)
// console.log(getComputedStyle(h1).marginRight)

//! получення числа
// console.log(parseFloat(getComputedStyle(h1).marginTop));
// console.log(parseInt(getComputedStyle(h1).marginTop));

//! атрибутами 

const input = document.querySelector('input')
const a = document.querySelector('a')

// console.log(input.type);
// console.log(input.value);

// a.href = 'https://google.com'
// console.log(a.href);

// console.dir(a);

//! Attribute() => has get rem set

//*1 has
console.log(input.hasAttribute('value'));//true
console.log(a.hasAttribute('value'));//false
//! hasAttribute() => true чи є такий атрибут і false якщо не має таого атрибута

//*2 get
console.log(input.getAttribute('value'));
//!вертає значення даного атрибута

//*3 set
console.log(input.setAttribute('value', 'добавляє нове значенн'));
//! 1 параметер атрибут наме 2 параметер це значення атрибута

//*4 remove
console.log(input.removeAttribute('value'));
//! видаляє атрибут