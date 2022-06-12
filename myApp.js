const path = require('path')
let express = require('express');
let app = express();

console.log('Hello World');


app.use(express.static(path.join(__dirname, '.', 'public', 'style.css')))


//this needs an function, not arrow function to work

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

module.exports = app;
