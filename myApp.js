let express = require('express');
let app = express();

console.log('Hello World');

//serves css file

app.use('/public', express.static(__dirname + '/public'));

//this needs an function, not arrow function to work

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', (req, res) => {
    res.json({ message: "Hello json" })
})

module.exports = app;
