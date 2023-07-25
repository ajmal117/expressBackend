const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path')

// const staticPath = path.join(__dirname, '../public');
const tempPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
//builtin middleware
// app.use(express.static(staticPath));

app.set("view engine", "hbs");
app.set("views", tempPath);

hbs.registerPartials(partialsPath);

app.get("", (req, res) => {
    res.render('index', {
        name: 'Weather Application'
    })
});

app.get('/', (req, res) => {
    res.send('this is express from backend part')
});

app.get('/about', (req, res) => {
    res.render('about')
    // res.send('this is about from backend')
});
app.get('/about/*', (req, res) => {
    res.render('404', { errorComment: 'this about page can not be found' })
    // res.send('this is about from backend')
});
app.get('/contact', (req, res) => {
    res.render('contact')
    // res.send('this is about from backend')
});
app.get('*', (req, res) => {
    res.render('404', {
        errorComment: 'this page can not be found',
    })
});

app.listen(8000, () => {
    console.log('listening port no 8000');
});