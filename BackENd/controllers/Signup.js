import { SignUpmodel } from "../models/SignUp.model.js"
export const SignUpController = (req,res) => {
    const {Email,Password} = req.body;
    console.log(Email,Password)
    if(!Email.includes("@srmap.edu.in")){
        return res.status(405).json({message:"UnAuthorized User"});
    }else if(Password.length ==0){
        return res.status(401).json({message:"Password Must Contain value"})
    }else{
        const func = async() => {
            try{
                const response = await SignUpmodel.create({Email,Password});
                if(response){
                    return res.status(201).json({message:"ok"});
                }else{
                    return res.status(500).json({message:"Internal Server Error"});
                }
            }catch(error){
                console.log(error);
            }
        }
        func()
    }
}