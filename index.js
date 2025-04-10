const express = require('express')
const {connectToMongoDB} = require('./connect')
const { handleShortUrl} = require('./controllers/url')
const path = require("path")
const URL = require('./models/url')  // Add this line to import the URL model
const staticRoute = require('./routes/staticRouter')

const urlRoute = require('./routes/url')
const app = express()

const PORT = 8000

connectToMongoDB('mongodb://localhost:27017/short-url')
.then(() => console.log("Mongo DB connected"))

app.set("view engine", "ejs"); //setting view template engine to ejs
app.set('views', path.resolve("./views")) //where to get views from

app.use(express.json())
app.use(express.urlencoded({extended: false})) //to support data from form

app.get('/test', async (req,res) => {
    const allUrls = await URL.find({})
    return res.render('home', {         //home is the name of the file views
        urls: allUrls,
    }) 
})

app.use('/', staticRoute)
app.use("/url", urlRoute)

// app.get('/:shortId', handleShortUrl)

app.listen(PORT, () => {
    console.log(`Server Started at PORT ${PORT}`)
})