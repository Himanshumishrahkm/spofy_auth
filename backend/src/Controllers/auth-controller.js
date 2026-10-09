const  mongoose  = require('mongoose');
const cookies = require('cookie-parser')
const jwt = require('jsonwebtoken')
const userModel = require('../Models/user-model');
const UserModel = require('../Models/user-model');
const bcrypt = require('bcryptjs')
const { registerSchema } = require("../validators/auth.validator");



//Resgister
async function resgisterUser(req,res) {


    const result = registerSchema.safeParse(req.body);

        if (!result.success) {
            return res.status(400).json({
                success: false,
                errors: result.error.issues.map((issue) => ({
                    field: issue.path.join("."),
                    message: issue.message,
                })),
            });
        }

        
        const { username, email, password } = result.data;

    
  
    
    const user = await userModel.findOne({
        $or: [
            {username},
            {email}
        ]
    })

    if(user)
    {
        return res.status(500).json({
            message:"Username or email is already taken"
        })
    }


    const hash = await bcrypt.hash(password,10);
    const userCreated = await UserModel.create({

        username,
        email,
        password:hash,
        role
    })

    const token = jwt.sign({userId : userCreated._id,role : userCreated.role},process.env.JWT_SCRECT_KEY);
    res.cookie("Token",token);
 
    res.status(201).json({
        "message":"User is Created...",
        "user" : userCreated
    })



}


//Login
async function LoginUser(req,res) { 
    
    const {username , email , password} = req.body;

    const user = await userModel.findOne({
        $or : [
            {username},
            {email}
        ]
    })

    if(!user)
    {
        return res.status(401).json({message :"Invalid credential"});
    }

    const isValidPassword = await bcrypt.compare(password,user.password);

    if(!isValidPassword)
    {
        return res.status(401).json({message:"Invalid credential"});
    }

    const token = jwt.sign({
        userId:user._id,
        role : user.role
    },process.env.JWT_SCRECT_KEY);
    
    res.cookie("Token",token);
    
    res.status(200).json({
        Message : "Login sucessfully",
        user :
            {
                id : user._id,
                Username : user.username,
                email : user.email,
                role : user.role
            }
    })


}


//logout
async function LogoutUser(req,res) {

    const token = req.cookies.Token;

    if(!token)
    {
        return res.status(400).json({
        message: "Status for user is already logout"
        });

    }

    res.clearCookie("Token");

    res.status(200).json({
    message: "User logged out successfully"
    }); 


}



module.exports = {resgisterUser , LoginUser , LogoutUser};