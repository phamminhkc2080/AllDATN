const dao = require('../Dao/Connection')
/*function*/


const getAlbums = async (req, res) => {
    try{
        if(req.query.id){
            const getAlbums= await dao.sequelize.query(
                `select top(5) * from Albums where idArtist =  ${req.query.id}`, { raw: true, nest: true }
            )
            return res.status(200).send(getAlbums)
        }
        return res.status(200).send([])
    }catch(error){
        return res.status(500).send(error);
    }
   
}






module.exports = {
    getAlbums
}