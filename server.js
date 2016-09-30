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

var articles = {
    'article-one': {
        title: 'Article one',
        heading: 'Article one',
        date: '26/09/2016',
        content: `<!doctype html>
                <html>
                <head>
                <title>ART ONE</title>
                </head>
                <link href="/ui/style.css" rel="stylesheet" />
                <body>
                    <a href="/">HOME</a>
                     <h2>26/09/2016</h2>
                <div class/"center">
                    <h2>Article Two</h2>
                </div> <hr/>
                <p> This is the content of my first article on page <b>/article-one</b>. Continue reading Continue reading Continue reading Continue reading </p> 
                <img src="/ui/madi.png" class="img-small"/>
                </body>
            </html> `
     } };
     
    

function createtemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var htmltemplate = `
    <!doctype html>
                <html>
                <head>
                <title>$(title)</title>
                </head>
                <link href="/ui/style.css" rel="stylesheet" />
                <body>
                    <a href="/">HOME</a>
                   <h2>$(date)</h2> 
                <div class="center">
                    <h2>$(heading)</h2>
                </div> <hr/>
                <p> This is the content of my first article on page <b>/article-one</b>. Continue reading Continue reading Continue reading Continue reading </p> 
                <img src="/ui/madi.png" class="img-small"/>
                </body>
            </html> `
            return htmltemplate;
    }

app.get('/:article-Name', function(res,req){
    var articleName = req.params.article-Name;
    res.send(createtemplate(articles[articleName]));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
