const express=require("express")
const app=express()
const cors=require("cors")

app.use(cors())

app.use(express.json())
const authrouter=require("./routes/auth.routes")

const userRouter=require("./routes/userRouter")

app.use(express.static('./routes/uploads'))
app.use("/auth",authrouter)
app.use("/file",userRouter)
module.exports=app;