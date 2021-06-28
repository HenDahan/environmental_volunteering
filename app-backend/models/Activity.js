import  mongoose  from "mongoose";
const activitySchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    }, 
    content: {
        type: String,
        required: true
    }
    // location:{

    // },
    // supervisor:{

    // },
    // date:{

    // }
});

const Activity = mongoose.model('activity',activitiesSchema);

module.exports =Activity;