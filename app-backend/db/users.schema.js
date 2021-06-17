const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
// const Activity = require('./activities.scema');

 
const userSchema = new mongoose.Schema({
    active: Boolean,
    fName:String,
    lName:String,
    // username: String,
    username:{   
        type:String,
        required:true
    },
    password:{   
        type:String,
        required:true
    },
    
    googleId:String,
    
    facebookId: String

    // activities: Activity
});

userSchema.plugin(passportLocalMongoose);

const User =mongoose.model('user',userSchema);


module.exports = User;