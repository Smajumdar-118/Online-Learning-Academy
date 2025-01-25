import mongoose from "mongoose";
import { any } from "zod";

const UserSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true , "Please provide Usernamae"], 
    },
    email : {
        type : String,
        required : [true , "Please provide email"],
        unique : true
    },
    password : {
        type : String,
        required : [true , "Please provide password"],
       
    },
    isVerified : {
        type : String,
        default : false
    },
    isAdmin : {
        type : String,
        default : false
    },
    favourites: {
        type: [String], 
        default: []
    },
    forgotPasswordToken : String,
    forgotPasswordExpiry : String,
    verifyToken : String,
    verifyTokenExpiry : String,

})


const User = mongoose.models.User || mongoose.model("User" ,UserSchema);
export default User;