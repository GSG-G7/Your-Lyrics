const express = require('express');

const router = express.Router();

const home = require('./home');
const error = require('./error');
const song = require('./song');
const songName = require('./getSongsNames');

router.get('/', home.get);
router.get('/songNames', songName.getSong);
router.post('/song', song.post);
router.use(error.client);
router.use(error.server);

module.exports = router;
