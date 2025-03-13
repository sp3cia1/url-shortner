const express = require('express')
const {connectToMongoDB} = require('./connect')
const { handleShortUrl} = require('./controllers/url')

const urlRoute = require('./routes/url')
const app = express()

const PORT = 8000

connectToMongoDB('mongodb://localhost:27017/short-url')
.then(() => console.log("Mongo DB connected"))

app.use(express.json())

app.use("/url", urlRoute)

app.get('/:shortId', handleShortUrl)

app.listen(PORT, () => {
    console.log(`Server Started at PORT ${PORT}`)
})