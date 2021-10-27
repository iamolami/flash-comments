const express = require('express')
const path = require('path')
const connectDB = require('./config/db')
const Comment = require('./models/comment')

const app = express();

//Connect to database
connectDB();

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 9000;

const server = app.listen(PORT, () => {
  console.log('Example app listening on port 9000')
});

app.get('/', (req, res) => {
  res.render('pages/index');
});

app.get('/about', (req, res) => {
  res.render('pages/about');
});

app.get('/contact', (req, res) => {
  res.render('pages/contact');
});

app.get('/articles', (req, res) => {
  res.render('pages/articles');
});

app.get('/signup', (req, res) => {
  res.render('pages/signup');
});

app.get(`/detail`, (req, res) => {
  res.render('pages/detail');
});

const io = require('socket.io')(server)

app.post('/api/comments', (req, res) => {
  const comment = new Comment({
    username: req.body.username,
    comment: req.body.comment
  })
  comment.save().then(response => {
    res.send(response)
  })
})

app.get('/api/comments', (req, res) => {
  Comment.find().then((comments) => {
    res.send(comments)
  })
})

io.on('connection', (socket) => {
  console.log(`New connection: ${socket.id}`)

  socket.on('comment', (data) => {
    data.time = Date()
    socket.broadcast.emit('comment', data)
  })

  socket.on('typing', (data) => {
    socket.broadcast.emit('typing', data)
  })
})