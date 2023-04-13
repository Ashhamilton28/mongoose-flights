const mongoose = require('mongoose')

//the schema
const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest','United']
    },

flightNo: {
    type: Number,

},

departs: {
    type: Date
}



})
const Flight = mongoose.model('Flight', flightSchema)
module.exports = Flight;