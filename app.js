var createError = require('http-errors');
var express = require('express');
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

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
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

module.exports = app;