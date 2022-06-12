const path = require('path')
let express = require('express');
let app = express();

console.log('Hello World');

app.get('/', (req, res) => {
    res.send(path.join(__dirname, + '../views/index.html'));
});

module.exports = app;
