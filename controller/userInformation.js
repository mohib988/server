const userInformation=require("../models/userinfo.js")
const userModel=require("../models/user.js")
const skillAndSummaryModel=require("../models/skillAndSummary")
const projectModel=require("../models/project.js")
const educationModel=require("../models/education.js")
const experienceModel=require("../models/experience.js")
const courseModel=require("../models/course.js")


const mongoose=require("mongoose")


const createProfile=async (req,res)=>{
const {gender,field,phoneNo,userId,name}=req.body
const image=req.file.path
// const genderSmall=new RegExp(gender,"i")
const createInformation=await userInformation.create({name:name,gender,field:field,phoneNo:phoneNo,profilePicture:image,userId})

res.status(201).json({data:createInformation})
}


const getUser=async (req,res)=>{
const {userId}=req.params
// const genderSmall=new RegExp(gender,"i")
const user= await userInformation.findOne({userId:userId})
const useremail= await userModel.findOne({_id:userId},"email")
const summary=await skillAndSummaryModel.findOne({userId:userId})
const education=await educationModel.findOne({userId:userId})
const course=await courseModel.findOne({userId:userId})
const experience=await experienceModel.findOne({userId:userId})
const project=await projectModel.findOne({userId:userId})
// result=Object.assign({}, user, summary);

res.status(201).json({data:{...(user?._doc),...(summary?._doc),...(experience?._doc),...(project?._doc),...(course?._doc),...(education?._doc),...(useremail._doc)}})
}
module.exports={createProfile,getUser}


