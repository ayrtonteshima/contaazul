const express = require('express');
var bodyParser = require('body-parser')
const routes = require('./routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('./dist'));
app.use(express.static('./static'));

app.use(routes);

module.exports = app;
