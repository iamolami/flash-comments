var express = require('express');
var path = require('path');
//var bodyParser = require('body-parser');

var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '1279731',
  key: '4096fab5b7a9133e8131',
  secret: '299dd4b74fb947c9a714',
  cluster: 'ap2',
  useTLS: true
});

var app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/comment', function (req, res) {
  console.log(req.body);
  var newComment = {
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
app.use(function (req, res, next) {
  var error404 = new Error('Route Not Found');
  error404.status = 404;
  next(error404);
});

module.exports = app;

const PORT = process.env.PORT || 9000
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log('Example app listening on port 9000!')
});