const dao = require('../Dao/Connection')
/*function*/


const getTopArtists = async (req, res) => {

    const getTopArtists= await dao.sequelize.query(
        `SELECT top(5) * FROM Artist ORDER BY follows DESC`, { raw: true, nest: true }
    )
    return res.status(200).send(getTopArtists)
}

const getAllArtists = async (req, res) => {

    const getAllArtists= await dao.sequelize.query(
        `select * from Artist Order by follows desc`, { raw: true, nest: true }
    )
    return res.status(200).send(getAllArtists)
}





module.exports = {
    getTopArtists,
    getAllArtists
}