import { Loginmodel } from "../models/Login.model.js";
export const LoginController = (req,res) => {
    const {Email,Password} = req.body;
    if(!Email.includes("@srmap.edu.in")){
        return res.status(405).json({message:"UnAuthorized User"});
    }else if(Password.length ==0){
        return res.status(401).json({message:"Password Must Contain value"})
    }else{
        const func = async() => {
            try {
                const user = await Loginmodel.findOne({ "Email": Email });
                console.log(user.Email,user.Password)
                if (!user) {
                    return res.status(401).json({ message: "Incorrect email or password" });
                }
                if (Password !== user.Password) {
                    return res.status(401).json({ message: "Incorrect email or password" });
                }
                return res.status(200).json({ message: "Login successful", user });
            } catch (error) {
                console.log(error);
                return res.status(500).json({ message: "Internal Server Error" });
            }
            
        }
        func()
    }
}