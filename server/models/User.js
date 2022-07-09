
const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
  
    profilePicture:{
        type:String
    },
    num:{
        type:Number
    },
    filename:{
        type:String
  },


})

module.exports=new mongoose.model("User",userSchema)