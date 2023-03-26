const express=require("express")
const noteRouter=express.Router()
const {NoteModel}=require("../model/note.model")

/**
 * @swagger
 * components:
 *   schemas:
 *     Note:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         title:
 *           type: string
 *         sub:
 *           type: string
 *         body:
 *           type: string
 */

/**
 * @swagger
 * /notes:
 *   get:
 *     summary: This route is get all the notes from database.
 *     responses:
 *       200:
 *         description: The list of all the notes.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Note'
 */

noteRouter.get("/",async(req,res)=>{
    try {
        const notes=await NoteModel.find()
        res.status(200).send(notes)
    } catch (err) {
        res.status(400).send("ERROR OCCURED")
    }

})



noteRouter.get("/:noteID",async(req,res)=>{
    const noteID=req.params.noteID
    try {
        const notes=await NoteModel.findOne({_id:noteID})
        res.status(200).send(notes)
    } catch (err) {
        res.status(400).send("ERROR OCCURED")
    }

})

/**
 * @swagger
 * /notes/add:
 *  post:
 *      summary: To post a new notes to the database
 *      tags: [Notes]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Note'
 *      responses:
 *          200:
 *              description: A NOTE HAS BEEN ADDED.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Note'
 *          400:
 *              description: ERROR OCCURED
 */

noteRouter.post("/add", async(req,res)=>{

    try {
        const note=new NoteModel(req.body)
await note.save()
res.status(200).send({"msg":"A NOTE HAS BEEN ADDED"})
    } catch (error) {
        res.status(400).send("ERROR OCCURED")
    }

})


/**
 * @swagger
 * /notes/update/:noteID:
 *   put:
 *     summary: To update a notes in the database using ID
 *     tags: [Notes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Note'
 *     responses:
 *       200:
 *         description: A NEW NOTE HAS BEEN UPDATED.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Note'
 *       400:
 *         description: ERROR OCCURED.
 */

noteRouter.patch("/update/:noteID",async(req,res)=>{
    const payload=req.body
    const noteID=req.params.noteID
    try {
        await NoteModel.findByIdAndUpdate({_id:noteID},payload)
        res.status(200).send({"msg":"A NEW NOTE HAS BEEN UPDATED"})
    } catch (err) {
        res.status(400).send("ERROR OCCURED")
    }
})

/**
* @swagger
* /notes/delete/:noteID:
*   delete:
*     summary: To delete a user from the database
*     tags: [Notes]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Note'
*     responses:
*       200:
*         description: A NEW NOTE HAS BEEN DELETED.
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Note'
*       400:
*         description: ERROR OCCURED.
*/

noteRouter.delete("/delete/:noteID",async(req,res)=>{
    const payload=req.body
    const noteID=req.params.noteID
    try {
        await NoteModel.findByIdAndDelete({_id:noteID})
        res.status(200).send({"msg":"A NEW NOTE HAS BEEN DELETED"})
    } catch (err) {
        res.status(400).send("ERROR OCCURED")
    }
})


module.exports={noteRouter}