var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/style1.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style1.css'));
});

app.get('/ui/style2.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style2.css'));
});

app.get('/ui/style3.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style3.css'));
});

app.get('/ui/style4.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style4.css'));
});

var counter=0;
app.get('/counter', function(req,res){
    counter=counter+1;
   res.send(counter.toString());
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/profile', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'profile.html'));
});

app.get('/contact', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'contact.html'));
});

app.get('/Blog_comment', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Blog_comment.html'));
});

app.get('/blog_posts', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'blog_posts.html'));
});
var names= [];
app.get('/submit-name', function (req, res) {
  var name= req.query.name;
  names.push(name);
  res.send(JSON.stringify(names));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/me.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'me.jpg'));
});

app.get('/ui/me1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'me1.jpg'));
});

app.get('/ui/main.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.jpg'));
});

app.get('/ui/profile.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'profile.jpg'));
});

app.get('/ui/star.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Star.jpg'));
});

app.get('/ui/image.jpeg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'image.jpeg'));
});

app.get('/ui/const.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'const.jpg'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
