import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    username :{
        type:String,
        required: true,
        unique: true,
    },
     email :{
        type:String,
        required: true,
        unique: true,
    },
     password :{
        type:String,
        required: true,
    },
    // timeStamps will add createAt, and updatesAt variable for every user 
},{timestamps:true})

const User = momgoose.model('User', userSchema);

export default User;