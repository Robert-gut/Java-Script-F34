let input = document.querySelector('.userText')
const btn = document.querySelector('button')



const addLetters = () => {
  // console.log(input.value.length);
  const letters = {}

  for (let i = 0; i < input.value.length; i++) {
    for(let b = 0; b <= Object.keys(letters).length; b++){
      if(input.value[i] !== Object.keys(letters)[b]){
        letters[input.value[i]] = 0
      }
    }
  }
  for(let b = 0; b <= Object.keys(letters).length; b++){
    for (let i = 0; i < input.value.length; i++) {
      if(input.value[i] === Object.keys(letters)[b]){
        letters[Object.keys(letters)[b]] += 1
      }
    }
  }

  const keySort = Object.keys(letters).sort((a, b) => letters[b] - letters[a])
  
  const ul = document.querySelector('ul')

  for (let i = 0; i < keySort.length; i++) {
    let d = keySort[i]

    ul.insertAdjacentHTML('beforeend',
    `<li>"${d}" - ${letters[d]}</li>`
    )
    
  }

}

btn.addEventListener('click', addLetters)
window.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    addLetters()
  }
})