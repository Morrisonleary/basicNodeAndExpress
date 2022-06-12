
let express = require('express');
let app = express();

console.log('Hello World');

app.get('/', (req, res) => {
    res.send(path.join(__dirname, + ''));
});

module.exports = app;
