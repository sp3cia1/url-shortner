
const shortid = require("shortid")

const URL = require('../models/url')

async function handleGenerateNewShortUrl(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error: 'url is required'})

    const shortID = shortid()


    await URL.create({
        shortId: shortID,
        redirectUrl: body.url,
        visitHistory: []
    });

    return res.json({id : shortID})
}

async function handleShortUrl(req,res){
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
    {
        shortId,
    }, 
    { 
        $push: {
            visitHistory: {timestamp:Date.now()},
        },
    }
    )
    res.redirect(entry.redirectUrl)
}

module.exports = {
    handleGenerateNewShortUrl,
    handleShortUrl
}