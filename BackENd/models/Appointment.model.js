import mongoose from "mongoose";
const schema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    date:{
        type:String,
        required:true,
        
    },
    time:{
        type:String,
        required:true
    }
},
{
    timestamps:true
}
)
export const AppointmentModel = mongoose.Model("Appointments",schema);
