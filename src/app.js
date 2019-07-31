const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const controllers = require('./controllers/router');
// Creating our app
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(
  express.static(path.join(__dirname, '..', 'public'), { maxAge: '30d' }),
);
app.use(controllers);

module.exports = app;
