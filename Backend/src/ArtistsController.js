const dao = require('../Dao/Connection')
/*function*/


const getTopArtists = async (req, res) => {

    const getTopArtists= await dao.sequelize.query(
        `SELECT top(5) * FROM Artist ORDER BY follows DESC`, { raw: true, nest: true }
    )
    return res.status(200).send(getTopArtists)
}





module.exports = {
    getTopArtists
}