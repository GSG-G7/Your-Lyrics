const path = require('path');
const express = require('express');
const compression = require('compression');
const controllers = require('./controllers/router');
// Creating our app
const app = express();

// Disable x-powered-by
app.disable('x-powered-by');

app.use(compression());
app.use(express.json());
// app.use()
app.use(express.urlencoded({ extended: false }));
app.set('port', process.env.PORT || 3000);

// Handling The statics
app.use(
  express.static(path.join(__dirname, '..', 'public'), { maxAge: '30d' }),
);

// Handling all the routes
app.use(controllers);

module.exports = app;
