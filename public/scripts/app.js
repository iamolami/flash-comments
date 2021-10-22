let socket = io()

const textarea = document.querySelector('#textarea')
const submitBtn = document.querySelector('#submitBtn')
const commentBox = document.querySelector('.comment__box')
const username = document.querySelector('#text')

submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  let comment = textarea.value
  let user = username.value

  if (!comment && user) {
    return
  }
  postComment(comment, user)
})

//Posting Data to DOM and syncing with database
function postComment(comment, user) {
  let data = {
    username: user,
    comment: comment
  }

  appendToDom(data)
  textarea.value = ''
  username.value = ''

  broadcastComment(data)

  syncWithDb(data)
}

//Append Data to class
function appendToDom(data) {
  let list = document.createElement('li')
  list.classList.add('comment__list')

  let content = `
    <div class="comment__row">
      <div class="comment__user">
        <img src="./assets/user.png" alt="user">
      </div>
      <div class="comment__card">
        <h3 class="comment__name">${data.username}</h3>
        <p class="comment__description">${data.comment}</p>
        <div class="comment__span">
          <i class='bx bx-time'></i>
          <span>${moment(data.time).format('LT')}</span>
        </div>
      </div>
    </div>

  `
  list.innerHTML = content

  commentBox.prepend(list)
}

//Broadcasting Message
function broadcastComment(data) {

  socket.emit('comment', data)
}

socket.on('comment', (data) => {
  appendToDom(data)
})

let timerId = null

function debounce(func, timer) {
  if (timerId) {
    clearTimeout(timerId)
  }
  timerId = setTimeout(() => {
    func()
  }, timer)
}

let typingDiv = document.querySelector('.typing')
socket.on('typing', (data) => {
  typingDiv.innerText = `${data.username} is typing...`
  debounce(() => {
    typingDiv.innerText = ''
  }, 1000)
})

textarea.addEventListener('keyup', (e) => {
  socket.emit('typing', {
    username
  })
})

//Api Calls
function syncWithDb(data) {
  const headers = {
    'Content-Type': 'application/json'
  }

  fetch('/api/comments', {
      method: 'Post',
      body: JSON.stringify(data),
      headers
    })
    .then(response => response.json())
    .then(result => {
      console.log(result)
    })
}

function fetchComments() {
  fetch('/api/comments')
    .then(res => res.json())
    .then(result => {
      result.forEach((comment) => {
        comment.time = comment.createdAt
        appendToDom(comment)
      })
    })
}

window.onload = fetchComments