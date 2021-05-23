import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    fName:String,
    lName:String,
    username: String,
    email:String,
    password:String,
    googleId:String,
    facebookId: String
});

export default mongoose.model('user',userSchema); 