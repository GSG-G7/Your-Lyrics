const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const controllers = require('./controllers/router');
// Creating our app
const app = express();

app.set('port', process.env.PORT || 3000);
// Handling the favicon
app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
// Handling the static files
app.use(
  express.static(path.join(__dirname, '..', 'public'), { maxAge: '30d' })
);
// Handling all the routes
app.use(controllers);

module.exports = app;
