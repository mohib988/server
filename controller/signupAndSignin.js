const jwt= require("jsonwebtoken");


const  mongoose  = require("mongoose");
const UserModal=require("../models/user.js")
const secret="test"



// const signin=(req,res)=>{
    
// }
const signup= async (req,res)=>{
    // const { email, password, firstName, lastName } = req.body;
// const image=req.file.path
// res.status(201).json({image})
    // try {
    //   const oldUser = await UserModal.findOne({ email });
  
    //   if (oldUser) return res.status(400).json({ message: "User already exists" });
  
  
    //   const result = await UserModal.create({ email, password: password, name: `${firstName} ${lastName}` });
  
    //   const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );
  
    //   res.status(201).json({ result, token });
    // } catch (error) {
    //   res.status(500).json({ message: "Error" });
      
    //   console.log(error);
    // }
  };

module.exports={signup}