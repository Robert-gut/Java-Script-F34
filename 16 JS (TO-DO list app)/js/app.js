const input = document.querySelector('.lists')
const pencil = document.querySelector('#pencil')
const ul = document.querySelector('.todos')
/////////////////////////////////////////////////
const save = document.querySelector('.save')
const clear = document.querySelector('.clear')
const tips = document.querySelector('.tipBtn')
////////////////////////////////////////////////
const all = document.querySelector('.all')
const active = document.querySelector('.active')
const performed = document.querySelector('.performed')


// input display
pencil.addEventListener('click', () => {
  input.classList.toggle('display')
})


//добавлення
const add = (text) => {
  const li = document.createElement('li')
  const span = document.createElement('span')
  const i = document.createElement('i')
  li.textContent = text
  i.classList.add('fas', 'fa-trash-alt')
  span.insertAdjacentElement('afterbegin', i)
  li.insertAdjacentElement('afterbegin', span)
  ul.insertAdjacentElement('beforeend', li)
}

// enter
input.addEventListener('keypress', (e) => {
  if(e.key === 'Enter'){
    const text = input.value
    input.value = ''
    add(text)
  }
})

//закреслення і видалення

ul.addEventListener('click', (e) => {
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked')
  }
  if(e.target.tagName === 'I'){
    e.target.parentElement.parentElement.remove()
  }
})


//фільтер
//активні
active.addEventListener('click', () => {
  const li = document.querySelectorAll('.todos li')
  for(let i = 0; i < li.length; i++){
    li[i].style.display = 'list-item'
    if(li[i].className === 'checked'){
      li[i].style.display = 'none'
    }
  }
})

//виконані
performed.addEventListener('click', () => {
  const li = document.querySelectorAll('.todos li')
  for(let i = 0; i < li.length; i++){
    li[i].style.display = 'list-item'
    if(li[i].className !== 'checked'){
      li[i].style.display = 'none'
    }
  }
})


const tipBtn = document.querySelector('.tipBtn')
const overlay = document.querySelector('#overlay')
tipBtn.addEventListener('click', ()=>{
  overlay.style.height = '100vh'
})