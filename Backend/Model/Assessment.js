var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var assessmentSchema = new Schema({
    answers: [{
        type:String,
        required:true
    }],
    questions: [String],
    username: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: new Date()
    },
    updated_at: {
        type: Date,
        default: new Date()
    }
});

var Assessment = mongoose.model('assessments', assessmentSchema);
module.exports = Assessment;
