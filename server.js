const express = require('express');
const path = require('path');
// const jsDom = require('jsdom');
// const url = require('./public/scripts/detail')

//const ejs = require('ejs');

const Pusher = require('pusher');

const pusher = new Pusher({
  appId: '1279731',
  key: '4096fab5b7a9133e8131',
  secret: '299dd4b74fb947c9a714',
  cluster: 'ap2',
  useTLS: true
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 9000
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log('Example app listening on port 9000!')
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


app.post('/articles', (req, res) => {
  console.log(req.body);
  const newComment = {
    name: req.body.name,
    email: req.body.email,
    comment: req.body.comment
  }
  pusher.trigger('flash-comments', 'new_comment', newComment);
  res.json({
    created: true
  });
});

// Error Handler for 404 Pages
app.use((req, res, next) => {
  const error404 = new Error('Route Not Found');
  error404.status = 404;
  next(error404);
});

module.exports = app;