const mongoose = require('mongoose')

//the schema
const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest','United']
    },

flightNo: {
    type: Number,
    required: true,
    min:10,
    max: 9999

},

departs: {
    type: Date,
    default: Date.now()+365*24*60*60000
}



})
const Flight = mongoose.model('Flight', flightSchema)
module.exports = Flight;