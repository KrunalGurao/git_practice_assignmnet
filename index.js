const express=require("express")
const{connection}=require("./db")
const { userRouter } = require("./routes/user.routes")
const{noteRouter}=require("./routes/note.routes")
const {auth}=require("./middleware/auth.middleware")
const swaggerJSdoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
require("dotenv").config()
const cors=require("cors")


const app=express()
app.use(express.json())
app.use(cors())

//definition
const options={
    definition:{
        openapi:"3.0.0",
        info:{
            title:"Learning Swagger",
            version:"1.0.0"
        },
        servers:[
            {
                url:"http://localhost:4500"
            }
        ]
    },
    apis:["./Routes/*.js"]
}
//specification
const swaggerSpec= swaggerJSdoc(options)
//building UI
app.use("/documentation",swaggerUI.serve,swaggerUI.setup(swaggerSpec))





app.use("/users",userRouter)
app.use(auth)
app.use("/notes",noteRouter)




app.listen(4500, async()=>{
    try {
        await connection
        console.log("server is running at 4500")
    } catch (err) {
        console.log("*******************************server is not running at 4500***************************")
    }
    
})