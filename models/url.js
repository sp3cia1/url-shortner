const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },

    redirectUrl: {
        type: String,
        required: true
    },
    visitHistory: [{timestamp: {type: Number}}],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    }

}, {timestamps: true})

const URL = mongoose.model('url', urlSchema)
//URL is the  constructor function (a Model) that you can use to create and query documents
//First parameter 'url': This is the name of the collection in MongoDB. MongoDB will automatically create a collection named 'urls' (lowercase and pluralized) in your database.

module.exports = URL