import mongoose from "mongoose";
const schema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    ConfirmPassword:{
        type:String,
        required:true
    }
})
export const model = mongoose.model("Users",schema);