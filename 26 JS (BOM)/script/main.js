// ? BOM 


//? 1 navigator

// const browserInfo = window.navigator
// console.log('✌️browserInfo --->', browserInfo);

// console.log(navigator.userAgent);
// console.log('Назва браузера:', navigator.appCodeName);//застаріла
// console.log('Версія браузера:', navigator.appVersion);//застаріла
// console.log('Назва браузера та платформи:',navigator.userAgent);
// console.log('Мову браузера:', navigator.language);
// console.log('Мову браузера (перший елемент):', navigator.languages[1]);
// console.log('Підтримка cookies:', navigator.cookieEnabled);
// console.log('Операційна система:', navigator.platform)

// console.log('Плагіни:', navigator.plugins);
// console.log('Cpu:', navigator.hardwareConcurrency);
// console.log('Інтернет:', navigator.onLine);
// console.log('Клавіатура:', navigator.keyboard.appCodeName);
// console.log('Дозволи:', navigator.permissions.query({name: 'geolocation'}));

//! перевірка підтримки geolocation api
// if ('geolocation' in navigator) {
//   navigator.geolocation.getCurrentPosition((position)=>{
//     console.log('Lat', position.coords.latitude);
//     console.log('Lon', position.coords.longitude);
//   })
// } else {
//   console.log('Geolocation is not supported.');
// }

//!Інформоція про мережу
// if('connection' in navigator){
//   const connection = navigator.connection
//   console.log('Effective Network Type:', connection.effectiveType);
//   console.log('Downlink speed (Mb/s):', connection.downlink);
// }


////////////////////////////////////////////////////////////////////////

//!відео
// const videoElement = document.getElementById('cameraFeed')

// if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
//   navigator.mediaDevices.getUserMedia({video: true})
//     .then((stream)=>{
//       videoElement.srcObject = stream
//     })
//     .catch((error) => {
//       console.log(error);
//     })
// } else {
//   console.log('getUserMedia is not supported in this browser.');
// }

//! audio

const audioElement = document.getElementById('audioFeed')
const startButton = document.getElementById('startButton')
const stopButton = document.getElementById('stopButton')

let mediaRecorder
let chunks = []

startButton.addEventListener('click', () => {
  startButton.disabled = true
  stopButton.disabled = false

  navigator.mediaDevices.getUserMedia({audio: true})
    .then((stream) => {
      mediaRecorder = new MediaRecorder(stream)

      mediaRecorder.ondataavailable = (e) => {
        chunks.push(e.data)
      }

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(chunks, {type: 'audio/ogg; codecs=opus'})
        const audioUrl = URL.createObjectURL(audioBlob)
        audioElement.src = audioUrl
      
        startButton.disabled = false
        stopButton.disabled = true

        // const a = document.createElement('a')
        // a.href = audioUrl
        // a.download = 'recorded_audio.ogg'
        // a.click()
      }
      mediaRecorder.start()
    })
    .catch((error) => {
      console.error('Error getting media devices:', error)
    })
})

stopButton.addEventListener('click', ()=>{
  if (mediaRecorder && mediaRecorder.state !== 'inactive') {
    mediaRecorder.stop()
  }
})


//? 2 screen

// console.log('Screen Width:', screen.width);
// console.log('Screen Height:', screen.height);

// console.log('Available Screen Width:', screen.availWidth);
// console.log('Available Screen Height:', screen.availHeight);

// console.log('Color Depth:', screen.colorDepth);
// console.log('Pixel Depth:', screen.pixelDepth);

// console.log('Screen Orientation:', screen.orientation.type);
// console.log('Screen Orientation:', screen.orientation);

//? 3 history

// console.log('History Length:', history.length);

// history.back()//! переміщає на 1 сторінку в іторії перегляду назад
// history.forward()//! переміщає на 1 сторінку в іторії перегляду вперед
// history.go(delta)//! ереміщає на певну к-ть delta сторінку в іторії перегляду вперед
// history.go(3)

// const newState = {page: 'newPage'}
// history.pushState(newState, 'New Page', '/new-page')

//? location

console.log('Current Url:', location.href);
console.log('Current Protocol:', location.protocol);
console.log('Current host:', location.host);
console.log('Current hostName', location.hostname);
console.log('Current port', location.port);
console.log('Current pathname', location.pathname);
console.log('Current search', location.search);
console.log('Current hash', location.hash);

// location.assign('http://instagram.com')