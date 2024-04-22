const loginAuth = document.getElementById('login')
const getUsers = document.getElementById('getUsers')
const registerBtn = document.getElementById('register')
const deleteUserBtn = document.getElementById('delete')

const baseURL = 'http://18.130.105.242:80/api/User'


//! post
async function login(user){
  try {
    const response = await fetch(
      baseURL + '/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      }
    )
    const data = await response.json()
    console.log('✌️data --->', data);
  } catch (error) {
    console.log(error);
  }
}


loginAuth.addEventListener('click', ()=>{login({
  "email": "barnabirobin1@gmail.com",
  "password": "qwerty-1"
})})


//! get

async function getAllUsersn(){
  try {
    const response = await fetch(
      baseURL + '/getAllUsers',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjY5YzgxYzhhOTU3NTQ2MzU3MzdkMyIsImZpcnN0TmFtZSI6IlJvYmVydCIsImxhc3ROYW1lIjoiQmFybmFiaXNodmlsaSIsImVtYWlsIjoiYmFybmFiaXJvYmluMUBnbWFpbC5jb20iLCJpc0FjdGl2YXRlZCI6dHJ1ZSwiZ2VuZGVyIjoibWFuIiwicGhvbmUiOiIwNjgxMTExMTExIiwicm9sZSI6IkFETUlOSVNUUkFUT1IiLCJkYXRlT2ZCaXJ0aCI6IjE5OTUtMDEtMDRUMDA6MDA6MDAuMDAwWiIsImNpdHkiOiJSaXZuZSIsImFkZHJlc3MiOiJTb2Jvcm5hIFN0cmVldCIsInppcENvZGUiOiIzMzAwMCIsImlhdCI6MTcxMzgwNzM3MCwiZXhwIjoxNzEzODA5MTcwfQ.GQivWseU7Y5_GVZltRoPEYSh6glgsuafhxMNkoZG3Nc'
        },
      }
    )
    const data = await response.json()
    console.log('✌️data --->', data);
  } catch (error) {
    console.log(error);
  }
}



getUsers.addEventListener('click', ()=>{getAllUsersn()})




async function register(user){
  try {
    const response = await fetch(
      baseURL + '/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTU4NDhiNGJiNjQyNTQxN2M0NzEzZSIsImZpcnN0TmFtZSI6IkFETUlOIiwibGFzdE5hbWUiOiJBRE1JTiIsImVtYWlsIjoiQURNSU5AQURNSU4uQ09NIiwiaXNBY3RpdmF0ZWQiOnRydWUsImdlbmRlciI6IkFETUlOIiwicGhvbmUiOiI5OTk5OTk5OTk5OTkiLCJyb2xlIjoiQURNSU5JU1RSQVRPUiIsImRhdGVPZkJpcnRoIjoiMTk4MC0wMS0wMVQwMDowMDowMC4wMDBaIiwiY2l0eSI6Ikt5aXYiLCJhZGRyZXNzIjoiMTIzIE1haW4gU3RyZWV0IiwiemlwQ29kZSI6IjAxMDAxIiwiaWF0IjoxNzEzODA1MjY4LCJleHAiOjE3MTM4MDcwNjh9.vAiXzFPjTTzPDDmOvwquLdwu0PS7bpr-HenNCi08kGQ'
        },
        body: JSON.stringify(user)
      }
    )
    const data = await response.json()
    console.log('✌️data --->', data);
  } catch (error) {
    console.log(error);
  }
}

registerBtn.addEventListener('click', ()=>{register(
  {
    "firstName": "Robert",
    "lastName": "Barnabishvili",
    "email": "barnabirobin1@gmail.com",
    "password": "qwerty-1",
    "confirmPassword": "qwerty-1",
    "gender": "man",
    "phone": "0681111111",
    "role": "ADMINISTRATOR",
    "dateOfBirth": "1995-01-04",
    "city": "Rivne",
    "address": "Soborna Street",
    "zipCode": "33000"
}
)})


async function deleteUser(id){
  try {
    const response = await fetch(
      baseURL + '/deleteUser/' + id,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjY5YzgxYzhhOTU3NTQ2MzU3MzdkMyIsImZpcnN0TmFtZSI6IlJvYmVydCIsImxhc3ROYW1lIjoiQmFybmFiaXNodmlsaSIsImVtYWlsIjoiYmFybmFiaXJvYmluMUBnbWFpbC5jb20iLCJpc0FjdGl2YXRlZCI6dHJ1ZSwiZ2VuZGVyIjoibWFuIiwicGhvbmUiOiIwNjgxMTExMTExIiwicm9sZSI6IkFETUlOSVNUUkFUT1IiLCJkYXRlT2ZCaXJ0aCI6IjE5OTUtMDEtMDRUMDA6MDA6MDAuMDAwWiIsImNpdHkiOiJSaXZuZSIsImFkZHJlc3MiOiJTb2Jvcm5hIFN0cmVldCIsInppcENvZGUiOiIzMzAwMCIsImlhdCI6MTcxMzgwNzc4NywiZXhwIjoxNzEzODA5NTg3fQ.QYx2Vbwa1w6-G5PGNNNGDsOU-uCCR5GykC6N9dcye4k'
        },
      }
    )
    const data = await response.json()
    console.log('✌️data --->', data);
  } catch (error) {
    console.log(error);
  }
}

deleteUserBtn.addEventListener('click', ()=>{deleteUser('662699f4b7073893e044be7f')})
