//call and configure your dotenv package
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const methodOverride = require('method-override')
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
app.use(express.urlencoded({ extended: false }))
app.use(express.json()) //turns sting into object
app.use(methodOverride('_method'))

//home page route
app.get('/', (req, res) => {
    res.send('Hello flights')
})

//new route
app.get('/flights/new', (req, res) => {
    res.render('New');
});

//post
app.post('/flights', (req, res)=>{
    console.log(req.body)
    
    console.log(req.body.flightNo)
    res.send('post request received')

    
})

//create route
app.get('/flights/create', (req, res) => {
    res.send('received')
})

//index
app.get('/flights', (req, res) => {
    Flight.find({}, (error, allFlights) => {
        res.render('Index', { flights: allFlights })
    })
})

//return the edits form 
app.get('/flights/:id/edit', (req, res) => {
    Flight.findById(req.params.id, (error, foundFlight) => {
        if (!error) {
            res.render('Edit', { flight: foundFlight })
        } else {
            res.send({ msg: error.message })
        }
    })
})













//404 error
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
