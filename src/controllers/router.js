const express = require('express');

const router = express.Router();

const home = require('./home');
const error = require('./error');
const request = require('./getRequest');

router.get('/', home.get);
router.get('/api-request', request.getRequest);

router.use(error.client);
router.use(error.server);

module.exports = router;
