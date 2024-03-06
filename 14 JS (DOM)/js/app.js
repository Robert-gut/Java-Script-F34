//? DOM

// const html = window.document.documentElement
// console.log(html);
// console.log(document.body);
// console.log(document.head);

//! навігація по вузлам

// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.body.childNodes);

// console.log(document.body.previousSibling);
// console.log(document.body.nextSibling);
// console.log(document.body.parentNode);

//! новігацію по елементам

// console.log(document.body.children);//все що є в середині баді

// console.log(document.body.firstElementChild);// сер на поч
// console.log(document.body.lastElementChild);// сер на кін

// console.log(document.body.previousElementSibling);//поряд пред
// console.log(document.body.nextElementSibling);//поряд після
// console.log(document.body.parentNode);//батьківськи тег


//? пошук по елементам в DOM

//! чітка навігація по певному елементу querySelectorAll()

// console.log(document.querySelectorAll('li')[2]);
// console.log(document.querySelectorAll('.li'));
// console.log(document.querySelectorAll('#li4'));
// console.log(document.querySelectorAll('ol [name]'));
// console.log(document.querySelectorAll('ol [name="li6"]'));

//! querySelector() то він вертає тільки ПЕРШИЙ найдений елемент

// console.log(document.querySelector('.li'));

//! getElementById() шукає по id

  // console.log(document.getElementById('li4'));

//! getElementByTagName() шукає по tag

// console.log(document.getElementsByTagName('title'));
// console.log(document.getElementsByTagName('li'));

//! getElementsByClassName() пошук по атрибуту класа

// console.log(document.getElementsByClassName('li'));

//! getElementsByName() пошук по атрибуту name

// console.log(document.getElementsByName('li6'));

//? види колекцій  є жива і статична

// console.log(document.querySelectorAll('.li'));// статична

// console.log(document.getElementsByClassName('li'));// жива

// document.querySelector('ol').insertAdjacentHTML(
//   'beforeend',
//   '<li class="li">3</li>'
// )

//! пошук нащадка closest()

// console.log(document.querySelector('#li4').closest('ol'));

//! перевірка на атрибута matches() => true or false

// console.log(document.querySelector('#li4').matches('#li4'));


//? РЕДАГУВАТИ DOM ЕЛЕМЕНТІВ

// const text = document.querySelector('p')

//! inerHTML те що в середині тега
// console.log(text.innerHTML);
// text.innerHTML = 'any way'
// text.innerHTML = `<span>lorem</span>`
// console.log(text.innerHTML);

//!outerHTML з тегом
// console.log(text.outerHTML);
// text.outerHTML = '<span>test</span>'

//! textContent вертає тільки текст без тегів
// text.textContent = `<span>any</span>`
// console.log(text.textContent);


//? створення елемента

//! createElement() створювати елементи
// const newEl = document.createElement('select')
// console.log(newEl);

// //! вставити елемент в dom
// const div = document.querySelector('div')
// console.log('✌️div --->', div);

// div.before(newEl)//перед елементом
// div.after(newEl)//після елемента
// div.prepend(newEl)//перед елементом в середині
// div.append(newEl)//після всіх елементів в середині

/////////////////////////////////////////////////
// //! insertAdjacentHTML()
// div.insertAdjacentHTML(
//   'afterbegin',
//   '<h1>test</h1>'
// )

// //! insertAdjacentElemetn()
// div.insertAdjacentElement(
//   'afterbegin',
//   newEl
// )

// //! insertAdjacentText()
// div.insertAdjacentText(
//   'afterend',
//   '<h1>test</h1>'
// )