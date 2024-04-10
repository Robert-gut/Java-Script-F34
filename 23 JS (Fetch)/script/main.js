//HTTP
//!GET - запит на отримання даних
//!POST - ЗАПИТ НА СТВОРЕННЯ НОВОГО
//!PUT PATCH - ЗАПИТ НА ОНОВЛЕННЯ ДАНИХ
//!DELETE - ЗАПИТ НА ВИДАЛЕННЯ


//! xmlHttpRequest ----



// const sendReq = (method, url) => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open(method, url)
//     xhr.responseType = 'json'
//     xhr.onload = () => {
//       if(xhr.status >= 400){
//         reject(xhr.response)
//       }else{
//         resolve(xhr.response)
//       }
//     }
//     xhr.send()
//   })
// }


// sendReq('GET', url)
// .then(data => console.log(data))
// .catch(err => console.error(err))


//!1 fetch and promise +++++

const btn = document.getElementById('load')
btn.addEventListener('click', Request)

// function Request() {
//   const url = 'https://jsonplaceholder.typicode.com/users'

//   fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     const list = document.querySelector('.list')
//     const elem = data.map(item => {
//       return `<li>${item.name} ${item.email}</li>`
//     })
//     list.insertAdjacentHTML('afterbegin', elem.join(''))
//   })
// }

//!2 fetch and async await
//? try catch

const url = 'https://jsonplaceholder.typicode.com/users'



async function Request() {
  try {
    const response = await fetch(url)
    const data = await response.json() 
    const list = document.querySelector('.list')
    const elem = data.map(item => {
      return `<li>${item.name} ${item.email}</li>`
    })
    list.insertAdjacentHTML('afterbegin', elem.join(''))

  } catch (error) {
    console.error(error);
  }
}
