var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var journalSchema = new Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },
    date_time: {
        type: Date,
        required: true,
        default:Date.now
    },
    journal:{
        type: String,
        required: true
    },
    videoFormat:{
        type: String
    },
    title: {
        type: String,
        required: true
    }

});

var Journal = mongoose.model('journals', journalSchema);
module.exports = Journal;
