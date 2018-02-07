const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
  res.header('Content-Type', 'text/html');
  res.sendFile(index.html)
});

app.listen(process.env.PORT || 5000, () => console.log('Hello, fellow geek!'))