import { model } from "../models/model.js";
export const Signup = async(req, res) => {
    const { Name, Email, Password, ConfirmPassword } = req.body;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    /* the password contains at least one digit, one lowercase letter, one uppercase letter
    , one special character, and is at least 8 characters long.*/
    if (Name && Email.includes("@srmap.edu.in") && passwordRegex.test(Password) && Password === ConfirmPassword) {
        try{
            const data = await model.create({Name,Email,Password,ConfirmPassword});
            if(data){
                return res.status(200).json({message:"Created Successfully"});   
            }else{
                return res.status(500).json({message:"Internal Server Error"})
            }
        }catch(error){
            console.log(error);
        }
    } else {
        return res.status(500).json({message:"Internal Server Error"});
    }
}
