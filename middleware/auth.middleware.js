const jwt=require("jsonwebtoken")
const auth=(req,res,next)=>{

const token=req.headers.authorization
if(token)
{
   const decoded= jwt.verify(token,"masai")
  
   if(decoded)
   {
    req.body.userID=decoded.userID
   return next()
   }
   else{
    res.status(400).send("ERROR has been occured and login first!!")
   }
}
else{
    res.status(400).send("ERROR has been occured and login first!!")
}


}

module.exports={
    auth
}