const express=require("express")
const{connection}=require("./db")
const { userRouter } = require("./routes/user.routes")
const{noteRouter}=require("./routes/note.routes")
const {auth}=require("./middleware/auth.middleware")
require("dotenv").config()
const cors=require("cors")



const app=express()
app.use(express.json())
app.use(cors())
app.use("/users",userRouter)
app.use(auth)
app.use("/notes",noteRouter)




app.listen(process.env.port, async()=>{
    try {
        await connection
        console.log("server is running at 4500")
    } catch (err) {
        console.log("server is not running at 4500")
    }
    
})