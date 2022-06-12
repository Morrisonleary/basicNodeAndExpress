let express = require('express');
let app = express();
require('dotenv').config()

console.log('Hello World');

//serves css file

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', (req, res) => {
    // res.json({ message: "Hello json" })
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        res.json({ message: "Hello json".toUpperCase() })
    } else {
        res.json({ message: "Hello json" })
    }

})

console.log(process.env.MESSAGE_STYLE)

module.exports = app;
