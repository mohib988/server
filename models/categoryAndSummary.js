const mongoose =require("mongoose")
const projectModel=mongoose.Schema({
user_id:{type:String ,require:true},
summary:{type:String,},
category:{type:[String]}

})
// module.exports=mongoose.model("",projectModel)