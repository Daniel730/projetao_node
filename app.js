const express = require('express');
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRouter = require('./routes/index');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'index'
}));

mongoose.promise = global.Promise;
mongoose.connect("mongodb://localhost/projetaonode").then(() => {
    console.log("Mongo Conectado!");
}).catch(err => {
    console.log("Algo deu errado" + err);
})

app.use(express.static('public'))

app.use('/', indexRouter);
app.use((req, res) => {
    res.status(404).render('404', { title: '404 PAGE NOT FOUND' })
})
module.exports = app;