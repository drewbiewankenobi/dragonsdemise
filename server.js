const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
  res.header('Content-Type', 'text/html');
  res.sendFile(index.html)
});

app.listen(3000, () => console.log('Hello, fellow geek!'))