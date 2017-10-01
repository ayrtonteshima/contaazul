const express = require('express');
const routes = require('./routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('./dist'));
app.use(express.static('./static'));

app.use(routes);

module.exports = app;