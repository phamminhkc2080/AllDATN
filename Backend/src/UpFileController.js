const dao = require('../Dao/Connection')
const file = require('../Server/fileUpload')
/*function*/



const uploadImage=async(req,res)=>{
   const path=await file.fileUploadImage(req.files.image)
    res.status(200).send(path)
}
const uploadAudio=async(req,res)=>{
    const path=await file.fileUploadAudio(req.files.audio)
     res.status(200).send(path)
 }

module.exports = {
    uploadImage,
    uploadAudio
}