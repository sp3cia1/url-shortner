const express = require('express')
const {handleGenerateNewShortUrl, handleGetAnalytics, handleShortUrl} = require('../controllers/url')


const router = express.Router()


router.post('/', handleGenerateNewShortUrl);
router.get('/:shortId', handleShortUrl);

router.get('/analytics/:shortId', handleGetAnalytics )

module.exports = router;