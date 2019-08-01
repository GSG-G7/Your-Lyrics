const express = require('express');

const router = express.Router();

const { get } = require('./home');
const { client, server } = require('./error');
const { post } = require('./song');

router.get('/', get);
router.post('/song', post);
router.use(client);
router.use(server);

module.exports = router;
