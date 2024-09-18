const data = [
  {
    song: "Mama Boy",
    singer: "Amme",
    avatar: "images/1.jpg",
    mp3: "music/1.mp3",
  },
  {
    song: "Em đã xa anh",
    singer: "Như Việt",
    avatar: "images/2.jpg",
    mp3: "music/2.mp3",
  },
  {
    song: "PtrpStudio - ชอบเธออะ",
    singer: "Sakarin",
    avatar: "images/3.jpg",
    mp3: "music/3.mp3",
  },
  {
    song: "Morsmordre",
    singer: "Crazy Donkey",
    avatar: "images/4.jpg",
    mp3: "music/4.mp3",
  },
  {
    song: "Cháy Phố Remix",
    singer: "DJ Atom",
    avatar: "images/5.jpg",
    mp3: "music/5.mp3",
  },
  {
    song: "Moskau",
    singer: "Dschinghis khan",
    avatar: "images/6.jpg",
    mp3: "music/6.mp3",
  },
  {
    song: "HƯỚNG DƯƠNG",
    singer: "CHANGG",
    avatar: "images/7.jpg",
    mp3: "music/7.mp3",
  },
  {
    song: "CÀ PHÊ",
    singer: "MIN",
    avatar: "images/8.jpg",
    mp3: "music/8.mp3",
  },
  {
    song: "Bỏ Em Vào Balo (Lofi Ver.)",
    singer: "Tân Trần x Freak D",
    avatar: "images/9.jpg",
    mp3: "music/9.mp3",
  },
  {
    song: "STAY",
    singer: "The Kid LAROI, Justin Bieber",
    avatar: "images/10.jpg",
    mp3: "music/10.mp3",
  },
  {
    song: "Anh Đánh Rơi Người Yêu Này",
    singer: "Andiez ft. AMEE",
    avatar: "images/11.jpg",
    mp3: "music/11.mp3",
  },
  {
    song: "Ascence - About You",
    singer: "NCS",
    avatar: "images/12.jpg",
    mp3: "music/12.mp3",
  },
  {
    song: "BEAUZ & JVNA - Crazy",
    singer: "NCS",
    avatar: "images/13.jpg",
    mp3: "music/13.mp3",
  },
  {
    song: "Gác lại âu lo",
    singer: "Da LAB ft. Miu Lê",
    avatar: "images/14.jpg",
    mp3: "music/14.mp3",
  },
  {
    song: "Lost Sky - Vision",
    singer: "NCS",
    avatar: "images/15.jpg",
    mp3: "music/15.mp3",
  },
  {
    song: "TRÊN TÌNH BẠN DƯỚI TÌNH YÊU",
    singer: "MIN",
    avatar: "images/16.jpg",
    mp3: "music/16.mp3",
  },
  {
    song: "Neoni - Haunted House",
    singer: "NCS",
    avatar: "images/17.jpg",
    mp3: "music/17.mp3",
  },
  {
    song: "PHẢI CHĂNG EM ĐÃ YÊU",
    singer: "JUKY SAN ft. REDT",
    avatar: "images/18.jpg",
    mp3: "music/18.mp3",
  },
  {
    song: "Tinoma - Find You",
    singer: "NCS",
    avatar: "images/19.jpg",
    mp3: "music/19.mp3",
  },
  {
    song: "Unknown Brain - Faceless",
    singer: "NCS",
    avatar: "images/20.jpg",
    mp3: "music/20.mp3",
  },
  {
    song: "Unknown Brain - Say Goodbye",
    singer: "NCS",
    avatar: "images/21.jpg",
    mp3: "music/21.mp3",
  },
  {
    song: "VÌ MẸ ANH BẮT CHIA TAY",
    singer: "MIU LÊ x KARIK x CHÂU ĐĂNG KHOA",
    avatar: "images/22.jpg",
    mp3: "music/22.mp3",
  },
  {
    song: "Bài Này Chill Phết",
    singer: "Đen ft. MIN",
    avatar: "images/23.jpg",
    mp3: "music/23.mp3",
  },
  {
    song: "Ex's Hate Me",
    singer: "B Ray x Masew (Ft AMEE)",
    avatar: "images/24.jpg",
    mp3: "music/24.mp3",
  },
  {
    song: "LẦN HẸN HÒ ĐẦU TIÊN",
    singer: "HUYỀN TÂM MÔN",
    avatar: "images/25.jpg",
    mp3: "music/25.mp3",
  },
  {
    song: "Lời Yêu Ngây Dại",
    singer: "Kha",
    avatar: "images/26.jpg",
    mp3: "music/26.mp3",
  },
  {
    song: "VÌ YÊU CỨ ĐÂM ĐẦU",
    singer: "MIN x ĐEN VÂU x JUSTATEE",
    avatar: "images/27.jpg",
    mp3: "music/27.mp3",
  },
  {
    song: "Shay Nắnggg",
    singer: " AMEE x OBITO x HỨA KIM TUYỀN x SKIN AQUA TONE UP UV",
    avatar: "images/28.jpg",
    mp3: "music/28.mp3",
  },
  {
    song: "TÌNH BẠN DIỆU KỲ",
    singer: "AMEE x RICKY STAR x LĂNG LD",
    avatar: "images/29.jpg",
    mp3: "music/29.mp3",
  },
  {
    song: "Never Gonna Give You Up",
    singer: "Rick Astley",
    avatar: "images/30.jpg",
    mp3: "music/30.mp3",
  },
  {
    song: "Baby Can U Kiss Me Remix",
    singer: "Orinn & SimonC",
    avatar: "images/31.jpg",
    mp3: "music/31.mp3",
  },
  {
    song: "Duyên Duyên Số Số Remix",
    singer: "Du Uyên ft Hương Ly",
    avatar: "images/32.jpg",
    mp3: "music/32.mp3",
  },
  {
    song: "Anh Sẽ Đón Em Remix",
    singer: "Nguyên ft. Trang",
    avatar: "images/33.jpg",
    mp3: "music/33.mp3",
  },
  {
    song: "CHỈ MUỐN BÊN EM LÚC NÀY",
    singer: "HUY VẠC ft JIKI X (PROD HƯNG HACK)",
    avatar: "images/34.jpg",
    mp3: "music/34.mp3",
  },
  {
    song: "ĐÁM CƯỚI NHA",
    singer: "HỒNG THANH X MIE",
    avatar: "images/35.jpg",
    mp3: "music/35.mp3",
  },
  {
    song: "Enemy",
    singer: "Imagine Dragons x J.I.D",
    avatar: "images/36.jpg",
    mp3: "music/36.mp3",
  },
  {
    song: "THÌ THẦM THÍCH THẢ THÍNH",
    singer: "LẬP NGUYÊN (ft. NƠ)",
    avatar: "images/37.jpg",
    mp3: "music/37.mp3",
  },
  {
    song: "Legends Never Die",
    singer: "(ft. Against The Current)",
    avatar: "images/38.jpg",
    mp3: "music/38.mp3",
  },
  {
    song: "Trip",
    singer: "Siine ft. Le June",
    avatar: "images/39.jpg",
    mp3: "music/39.mp3",
  },
  {
    song: "Yêu Đơn Phương Là Gì Remix",
    singer: "h0n",
    avatar: "images/40.jpg",
    mp3: "music/40.mp3",
  },
  {
    song: "Chỉ Muốn Bên Em Thật Gần Remix",
    singer: "Y Ling x Nguyễn Minh Phúc x Freak D",
    avatar: "images/41.jpg",
    mp3: "music/41.mp3",
  },
];

//1. thêm số 0 vào đằng trước các số 0 đến 9
function addZero(number){
  if(number >= 0 && number <= 9) return `0${number}`
  else return number
}

//2. chuyển đổi giây thành phút và format lại 
function convertSecondsToMinutes(timeType, element = ''){
  let seconds = 0
  if(timeType === 'currentTime'){
      seconds = element.currentTime.toFixed(0)
  }else if(timeType === 'duration'){
      seconds = element.duration.toFixed(0)
  }else{
      seconds = timeType.toFixed(0)
  }
  const minutes = Math.trunc(seconds / 60)
  return  `${addZero(minutes)}:${addZero(seconds - minutes * 60)}`
}

//3. tối ưu việc random để 1 bài hát không lặp lại cho đến đã phát hết danh sách bài hát
let random = []
function randomOptimization(arr){
  const max = arr.length
  let numberRandom = Math.floor(Math.random() * max)
  
  if(random.length >= arr.length){
      random = []
  } 
      

  while(random.find(num => numberRandom == num) !== undefined){
      numberRandom = Math.floor(Math.random() * max)
  }

  random.push(numberRandom)
  return numberRandom
}

//4 lấy ra phần trăm chiều ngang của chuột và timeline
function percentTimeLine(e){
  let percent = ''
  const left = timeLine.offsetLeft
  const width = timeLine.offsetWidth
  if(clickDown && e.clientX >= left && e.clientX <= left + width){
      percent = (e.clientX - left) / width
  }else if(clickDown && e.clientX < left){
      percent = 0
  }else if(clickDown && e.clientX > left + width){
      percent = 1
  }
  
  return percent
}

//
function intervalCurrent(){
  playingTimeLeft.innerHTML = convertSecondsToMinutes('currentTime', document.querySelector('audio.active'))
  circle.style.left = document.querySelector('audio.active').currentTime / document.querySelector('audio.active').duration * 100 + '%'
  percentLine.style.width = document.querySelector('audio.active').currentTime / document.querySelector('audio.active').duration * 100 + '%'
}

const playList = document.getElementById('playlist')

//5. render danh sách phát
data.forEach((item, index) => {
  playList.insertAdjacentHTML('beforeend', `
  
  <div class="item" data-index="${index}">
  <audio class="audio${++index}" src="${item.mp3}"></audio>
  <span class="item__number">${addZero(index)}</span>
  <img src="${item.avatar}">
  <span class="oi item__icon" data-glyph="caret-right"></span>
  <div class="music">
  <div class="item__song">${item.song}</div>
  <div class="item__singer">${item.singer}</div>
  </div>
  <span class="item__time">00:00</span>
  </div>
  `)
});

//6. hiển thị thời gian bài hát của phần danh sách sau khi render xong
document.querySelectorAll('audio').forEach(audio => {
  audio.addEventListener('loadedmetadata', function(){
      audio.parentElement.querySelector('.item__time').innerHTML = convertSecondsToMinutes('duration', audio)
  })
})


const listAudio = document.querySelectorAll('audio')
const listItem = document.querySelectorAll('.item')
const playingImg = document.querySelector('#playing .thumbnail img')
const thumbnail = document.querySelector('#playing .thumbnail')
const playingSong = document.querySelector('#playing .song')
const playingSinger = document.querySelector('#playing .singer')
const playingTimeRight = document.querySelector('#playing .time .right')
const playingTimeLeft = document.querySelector('#playing .time .left')
const play = document.querySelector('.controls .play')
const pause = document.querySelector('.controls .pause')
const forWard = document.querySelector('.controls .forward')
const backward = document.querySelector('.controls .backward')
const timeLine = document.querySelector('#playing .time-line')
const circle = timeLine.querySelector('.circle')
const percentLine = timeLine.querySelector('.percent')
const loop = document.querySelector('.controls .loop')
const randomControl = document.querySelector('.controls .random')


listItem[0].classList.add('active')
listAudio[0].classList.add('active')

let currentTime = ''

//7. khi nhấn bài bài hát
listItem.forEach(item => {
  item.addEventListener('click', function(){

      thumbnail.classList.remove('pause')
      thumbnail.classList.remove('play')
      
      //6.1 hiệu ứng active 
      document.querySelector('.item.active').classList.remove('active')
      item.classList.add('active')

      //6.2 dừng audio đang phát vào đặt thời gian về 0
      document.querySelector('audio.active').pause()
      document.querySelector('audio.active').currentTime = 0

      //6.3 xóa, thêm class active cho audio
      document.querySelector('audio.active').classList.remove('active')
      item.querySelector('audio').classList.add('active')
      
      //6.4 hiệu ứng thay đổi ảnh, bài hát, ca sĩ, thời gian
      playingImg.setAttribute('src', item.querySelector('img').getAttribute('src'))
      playingSong.innerHTML = item.querySelector('.item__song').innerHTML
      playingSinger.innerHTML = item.querySelector('.item__singer').innerHTML
      playingTimeRight.innerHTML = item.querySelector('.item__time').innerHTML

      //6.5 hiệu ứng cuộn, clearInterval, xóa class active của loop
      item.scrollIntoView({behavior: "smooth", block: "center"})
      clearInterval(currentTime)
      loop.classList.remove('active')

      //6.6 nếu random có active và index không có trong mảng random thì thêm index đó vào mảng random 
      if(randomControl.classList.contains('active')){
          const itemId = document.querySelector('.item.active').dataset.index
          if(random.find(num => itemId == num) === undefined) random.push(itemId)
      }
      play.click()
  })
})

//8. khi ấn play
play.addEventListener('click', function(){
  forWard.style.pointerEvents = 'all'

  thumbnail.classList.remove('pause')
  thumbnail.classList.add('play')

  //8.1 hiệu ứng đổi sang pause
  play.style.display = 'none'
  pause.style.display = 'block'
  
  //8.2 phát audio đang active
  document.querySelector('audio.active').play()
  
  //8.3 hiệu ứng thời giạn hiện tại của bài hát
  currentTime =  setInterval(()=>{
      intervalCurrent()
  }, 100)

  //8.4 khi audio active kết thúc
  document.querySelector('audio.active').onended = function(){
      clearInterval(currentTime)
      
      // nếu ấn chọn random
      if(randomControl.classList.contains('active')){
          listItem[randomOptimization(listItem)].click()
      }
      // nếu ấn chọn loop
      else if(loop.classList.contains('active')){
          play.click()
      // mặc định phát bài tiếp theo
      }else{
          forWard.click()
      }
  }
  

})

//9. khi ấn pause
pause.addEventListener('click', function(){
  pause.style.display = 'none'
  play.style.display = 'block'

  thumbnail.classList.remove('play')
  thumbnail.classList.add('pause')

  clearInterval(currentTime)
  document.querySelector('audio.active').pause()
})

//10. khi ấn forWard
forWard.addEventListener('click', function(){
  const nextItem = document.querySelector('.item.active').nextElementSibling
  if(nextItem){
      nextItem.click()
  }else{
      pause.click()
      this.style.pointerEvents = 'none'
  }
})

//11. khi ấn backWard
backward.addEventListener('click', function(){
  const prevItem = document.querySelector('.item.active').previousElementSibling
  if(prevItem){
      prevItem.click()
  }
})

let clickDown = false

//12. hiệu ứng kéo thả time line
window.addEventListener('mousedown', function(e){
  if(e.target.matches('.circle') || e.target.matches('.time-line') || e.target.matches('.percent')){
      clickDown = true
      clearInterval(currentTime)
  }
})

window.addEventListener('mousemove', function(e){
  this.document.body.style.userSelect = 'none'

  let percent = percentTimeLine(e)

  if(clickDown){
      clearInterval(currentTime)
      playingTimeLeft.innerHTML =  convertSecondsToMinutes(percent * document.querySelector('audio.active').duration)
      circle.style.left = percent * 100 + '%'
      percentLine.style.width = percent * 100 + '%'
  }
  
})

window.addEventListener('mouseup', function(e){
  if(clickDown){
      document.querySelector('audio.active').currentTime = percentTimeLine(e) * document.querySelector('audio.active').duration
      currentTime =  setInterval(()=>{
          intervalCurrent()
      }, 100)
      clickDown = false
  }
})

timeLine.addEventListener('click', function(){
  intervalCurrent()
})


//13. khi ấn vào loop
loop.addEventListener('click', function(){
  randomControl.classList.remove('active')
  this.classList.toggle('active')
})

//14. khi ấn vào random
randomControl.addEventListener('click', function(){
  loop.classList.remove('active')
  this.classList.toggle('active')
  random = []
  if(this.classList.contains('active')){
      random.push(document.querySelector('.item.active').dataset.index)
  }
})

thumbnail.addEventListener('animationend', function(e){
  if(e.animationName === 'rotatePause'){
      thumbnail.classList.remove('pause')
      this.style.borderRadius = '20px'
  }
})