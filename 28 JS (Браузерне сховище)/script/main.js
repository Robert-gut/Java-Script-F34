const saveDataBtn = document.querySelector('#saveData')
saveDataBtn.addEventListener('click', saveData)

function saveData(){
  const data = document.getElementById('dataInput').value

  //!LS
  localStorage.setItem('localData', data)
  displayLocalStorageData()

  //!SS
  sessionStorage.setItem('sessionData', data)
  displaySessionStorageData()


  //!Cookies
  document.cookie = `cookieData=${data}; expires=${new Date(Date.now() + 86400000)}; secure`
  displayCookieData()
}

function displayLocalStorageData(){
  const data = localStorage.getItem('localData')
  document.getElementById('localStorageOutput').innerText = data 
}

function displaySessionStorageData(){
  const data = sessionStorage.getItem('sessionData')
  document.getElementById('sessionStorageOutput').innerText = data 
}

function displayCookieData(){
  const cookies = document.cookie.split(';')
  const cookieData = cookies.find(cookie => cookie.trim().startsWith('cookieData='))
  document.getElementById('cookieOutput').innerText = cookieData 
}


document.getElementById('clearLocalStorage').addEventListener('click', clearLS)
document.getElementById('clearSessionStorage').addEventListener('click', clearSS)
document.getElementById('clearCookie').addEventListener('click', clearCS)

function clearLS(){
  localStorage.clear()
  displayLocalStorageData()
}
function clearSS(){
  sessionStorage.clear()
  displaySessionStorageData()
}
function clearCS(){
  document.cookie = `cookieData=; max-age=-1`
  displayCookieData()
}