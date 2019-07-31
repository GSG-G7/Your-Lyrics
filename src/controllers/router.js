const express = require('express');

const router = express.Router();

const home = require('./home');
const error = require('./error');
const request = require('./getRequest');
const song = require('./song');

router.get('/', home.get);
router.get('/api', request.getRequest);
router.post('/song', song.post);
router.use(error.client);
router.use(error.server);

module.exports = router;
