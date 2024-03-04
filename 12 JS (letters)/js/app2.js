const input = document.querySelector('.userText')
const btn = document.querySelector('button')
window.addEventListener('keypress', e => e.key === 'Enter' && addLetters())
const addLetters = () => {
  const listItems = document.querySelectorAll('li')
  listItems.length && listItems.forEach(item => item.remove())
  
  const letters = {}
  for (let i = 0; i < input.value.length; i++) {
    const letter = input.value[i]
    if (letters[letter]) {
      letters[letter]++
    } else {
      letters[letter] = 1
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
  input.value = ''
}
btn.addEventListener('click', addLetters)
