import mongoose from "mongoose";
const Schema = new mongoose.Schema({
    Email:{
     type:String,
     required:true   
    },
    Password:{
        type:String,
        required:true
    }
})
export const SignUpmodel = mongoose.model("Users",Schema);