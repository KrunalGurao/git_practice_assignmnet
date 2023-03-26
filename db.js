const mongoose=require("mongoose")
require("dotenv").config()

const connection=mongoose.connect("mongodb+srv://krunalgurao:krunalgurao@cluster0.lwexwox.mongodb.net/authlecture?retryWrites=true&w=majority")
module.exports={
    connection
}