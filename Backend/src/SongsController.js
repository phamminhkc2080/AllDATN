const dao = require('../Dao/Connection')
const file = require('../Server/fileUpload')
/*function*/


const getAllSongs = async (req, res) => {

    const getallsongs= await dao.sequelize.query(
        `Select * from Songs`, { raw: true, nest: true }
    )
    return res.status(200).send(getallsongs)
}
const getRecommended = async (req, res) => {

    const getRecommended= await dao.sequelize.query(
        `SELECT TOP(5) * FROM Songs
        ORDER BY NEWID()`, { raw: true, nest: true }
    )
    return res.status(200).send(getRecommended)
}

const getTopSongs = async (req, res) => {

    const getTopSongs= await dao.sequelize.query(
        `SELECT top(5) * FROM Songs ORDER BY likes DESC`, { raw: true, nest: true }
    )
    return res.status(200).send(getTopSongs)
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
    addSong,
    getTopSongs,
    getRecommended
}