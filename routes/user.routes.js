const express=require("express")
const userRouter=express.Router()
const {UserModel}=require("../model/user.model")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const app=express()
app.use(express.json())

//************************************************************************************************** */


//registration
userRouter.post("/register", async(req,res)=>{
    const{email,pass,location,age}=req.body
    try {
        bcrypt.hash(pass, 5,async(err,hash)=>{
            const user=new UserModel({email,pass:hash,location,age})
            await user.save()
            res.status(200).send({"msg":"REGISTRATION SUCCESSFULL"})
        });            
    } catch (err) {
        res.status(400).send({"msg":"ERROR"})
    }
})

//************************************************************************************************/

//login(authentication)
userRouter.post("/login", async(req,res)=>{
    const {email,pass}=req.body
  
    try {
        const user=await UserModel.findOne({email})
        // console.log(user)
        if(user)
        {
            bcrypt.compare(pass, user.pass,(err,result)=>{
                if(result)
                {
                    res.status(200).send({"msg":"LOGIN SUCCESSFULL","token":jwt.sign({"userID":user._id},"masai")})
                }
                else
                {
                    res.status(200).send({"msg":"login fail"})
                }
               
        });
       
    }
}catch(err){
        res.status(400).send({"msg":"ERROR"})
    }
})
       

//************************************************************************************************/





module.exports={
    userRouter
}