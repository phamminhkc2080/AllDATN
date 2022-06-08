const dao = require('../Dao/Connection')
const file = require('../Server/fileUpload')
/*function*/


const getAllSongs = async (req, res) => {

    const getallsongs= await dao.sequelize.query(
        `Select * from Songs`, { raw: true, nest: true }
    )
    return res.status(200).send(getallsongs)
}

const addSong = async (req, res) => {

    const getallsongs= await dao.sequelize.query(
        `Insert into Songs(name) values (N'${req.body.textname}')`, { raw: true, nest: true }
    )
    return res.status(200).send(getallsongs)
}

const upload=async(req,res)=>{
   const path=await file.fileUpload(req.files.image)
    res.status(200).send(path)
}

module.exports = {
    getAllSongs,
    upload,
    addSong
}