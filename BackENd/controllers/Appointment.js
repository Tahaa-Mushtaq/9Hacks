import { AppointmentModel } from "../models/Appointment.model.js";
export const setAppointment = (req, res) => {
    const { id, date, time } = req.body;
    const requestedDate = new Date(date);
    const currentDate = new Date();
    if (requestedDate > currentDate) {
        try{
            const start = async() => {
                const response = await AppointmentModel.create({id,date,time});
                if(response){
                    return res.status(200).json({message:"Successfully inserted"});
                }else{
                    return res.status(500).json({message:"Internal Server Error"});
                }
            }
            start();
        }catch(error){
            throw new Error(error);
        }
    } else {
        return res.status(400).json({message:"Invalid date"});
    }
}