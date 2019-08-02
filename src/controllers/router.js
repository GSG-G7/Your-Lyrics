const express = require('express');

const router = express.Router();

const { get } = require('./home');
const { client, server } = require('./error');
const { post } = require('./song');
const { getSong } = require('./getSongsNames');

router.get('/', get);
router.post('/song', post);
router.get('/getSongs', getSong);
router.use(client);
router.use(server);

module.exports = router;
