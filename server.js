//call and configure your dotenv package
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
//data
const Flight = require('./models/Flight')
const app = express();
const PORT = 3000


//====Configuration
//these 2 lines of code are needed to set everything up
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

//======Middleware
//Setting a middleware to run in our app
app.use((req, res, next) => {
    console.log(req.url)
    next()
})

//parses the data from the request
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('Hello flights')
})


 
app.get('/flights', (req, res) => {
    Flight.find({}, (error, allFlights)=>{
        res.render('Index', {flights: allFlights})
    })
});


app.get('/flights/new', (req, res) => {
    res.render('New');
});

//index
app.get('/flights', (req, res)=>{
    res.render('Index', {flight: flights})
})






app.get('*', (req, res) => {
    res.redirect('404')
})




// Tell the app to listen on port 3000
app.listen(3000, () => {
    console.log(`Server running on  port: ${PORT}`);
    mongoose.set('strictQuery', true)
    // connect to mongodDB
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB!')
    })
})
