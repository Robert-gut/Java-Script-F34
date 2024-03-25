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
    
    console.log(this);
  }
}

const registrationForm = document.getElementById('registrationForm')

registrationForm.addEventListener('submit', (e) => {
  e.preventDefault()
  // console.log(e);
  
  const firstName = document.getElementById('firstName').value
  const lastName = document.getElementById('lastName').value
  const date = document.getElementById('date').value
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const confirm_password = document.getElementById('confirm_password').value

  const user = new User(firstName, lastName, date, email, password, confirm_password)
  user.register()
})