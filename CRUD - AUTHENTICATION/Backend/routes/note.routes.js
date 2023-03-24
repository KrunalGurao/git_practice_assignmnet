const express=require("express")
const noteRouter=express.Router()
const {NoteModel}=require("../model/note.model")



noteRouter.get("/",async(req,res)=>{
    try {
        const notes=await NoteModel.find()
        
    } catch (err) {
        res.status(400).send("ERROR OCCURED")
    }

})

noteRouter.post("/add", async(req,res)=>{

    try {
        const note=new NoteModel(req.body)
await note.save()
res.status(200).send("a new note has been added")
    } catch (error) {
        res.status(400).send("ERROR OCCURED")
    }

})



noteRouter.patch("/update",async(req,res)=>{
    const payload=req.body
    const noteID=req.params.noteID
    try {
        await NoteModel.findByIdAndUpdate({_id:noteID},payload)
        res.status(200).send("a new note has been updated")
    } catch (err) {
        res.status(400).send("ERROR OCCURED")
    }
})



noteRouter.delete("/delete",async(req,res)=>{
    const payload=req.body
    const noteID=req.params.noteID
    try {
        await NoteModel.findByIdAndDelete({_id:noteID})
        res.status(200).send("a new note has been deleted")
    } catch (err) {
        res.status(400).send("ERROR OCCURED")
    }
})


module.exports={noteRouter}