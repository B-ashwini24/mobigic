const User=require("../models/User")
const fs=require('fs')
const path=require('path')
const fileupload=(req,res)=>{
    console.log(req.files,req.body)
    console.log("filename"+req.body.filename)
    let splitArray=req.files.file.path.split("\\")
const user=new User({
    
    fillename:req.body.filename,
    num:req.body.num,
   profilePicture:splitArray[splitArray.length-1]

})
user.save().then(data=>{
    console.log(data.profilePicture)
    res.send({
        message:"data saved",
        data:data
        
    })
})

}
const downloadfile=(req,res)=>{
    console.log("response"+req.body)
   res.download()

}
const getdata=(req,res)=>{
    User.find().then(result=>{
        res.send({
            
            data:result
        })
    })
}
module.exports={
    fileupload,getdata,downloadfile
}
