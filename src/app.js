const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('hello world from express')
})
app.get('/about', (req, res) => {
    res.send('hello world from about page')
})

app.listen(7000, () => {
    console.log('listening port number 7000')
})