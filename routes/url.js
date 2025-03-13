const express = require('express')
const {handleGenerateNewShortUrl} = require('../controllers/url')

const router = express.router()

router.post('/', handleGenerateNewShortUrl);

module.exports = router;