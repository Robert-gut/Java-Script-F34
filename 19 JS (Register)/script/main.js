class User {
  constructor(firstName, lastName, date, email, password, confirm_password){
    this.firstName = firstName
    this.lastName = lastName
    this.date = date
    this.email = email
    this.password = password
    this.confirm_password = confirm_password
  }

  register(){
    if (this.firstName.length < 1) {
      alert('error first name')
      return
    }
    if (this.lastName.length < 1) {
      alert('error first name')
      return
    }
    if (this.date.length < 1) {
      alert('error first name')
      return
    }
    if (this.email.length < 1) {
      alert('error first name')
      return
    }
    if (this.password.length < 6) {
      alert('error first name')
      return
    }
    if (this.password !== this.confirm_password) {
      alert('error first name')
      return
    }
    console.log(this);
    localStorage.setItem(this.email, JSON.stringify(this))
    alert('Успішна реєстрація!')
    return true
  }
}

const registrationForm = document.getElementById('registrationForm')
const loginForm = document.getElementById('loginForm')

registrationForm.addEventListener('submit', (e) => {
  e.preventDefault()
  
  const firstName = e.target[0].value
  const lastName = e.target[1].value
  const date = e.target[2].value
  const email = e.target[3].value
  const password = e.target[4].value
  const confirm_password = e.target[5].value

  const user = new User(firstName, lastName, date, email, password, confirm_password)
  if(user.register()){
    registrationForm.style.display = 'none'
    loginForm.style.display = 'block'
  }
})

// go to register btn

document.getElementById('registerBtn').addEventListener('click', () => {
  loginForm.style.display = 'none'
  registrationForm.style.display = 'block'
})

// log in

loginForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const logInEmail = document.getElementById('logInEmail').value
  const logInPassword = document.getElementById('logInPassword').value
  const userData = localStorage.getItem(logInEmail)
  
  if(userData){
    const user = JSON.parse(userData)
    if (user.password === logInPassword) {
      alert('Вхід успішний!')
    }else{
      alert('Неправельний пароль!')
    }
  } else {
    alert('Користувача з таким Email не існує!')
  }
})

// go to logIn page

document.getElementById('goToLogInPage').addEventListener('click', ()=>{
  registrationForm.style.display = 'none'
  loginForm.style.display = 'block'
})