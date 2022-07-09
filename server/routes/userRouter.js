const express=require("express")

const userRouter=express.Router()
var multipart=require('connect-multiparty')
const path=require('path')
var multipartMiddleware=multipart({uploadDir:path.join(__dirname,"uploads")})

const {fileupload,getdata,downloadfile}=require("../controllers/userController")

userRouter.post("/upload",multipartMiddleware,fileupload)
userRouter.get("/getdata",getdata)
userRouter.get("/downloadfile",downloadfile)

module.exports= userRouter