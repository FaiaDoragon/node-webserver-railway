const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//handlebar
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Frank Jimenez',
        titulo: 'Curso de Node'
    })
})

app.get('/home', (req, res) => {
    res.render('home', {
        nombre: 'Frank Jimenez',
        titulo: 'Curso de Node'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Frank Jimenez',
        titulo: 'Curso de Node'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Frank Jimenez',
        titulo: 'Curso de Node'
    })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })