const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    }, 
    content: {
        type: String,
        required: true
    },
     location:{
        type: String,
        required: true
     },
    supervisor:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    }
});

const Activity = mongoose.model('activity',activitySchema);

module.exports =Activity;