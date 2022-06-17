const dao = require('../Dao/Connection')
const file = require('../Server/fileUpload')
/*function*/


const getTopCategoris = async (req, res) => {

    const getTopCategoris= await dao.sequelize.query(
        `SELECT top(5) * FROM Categories`, { raw: true, nest: true }
    )
    return res.status(200).send(getTopCategoris)
}

const getCategorisTrending = async (req, res) => {

    const getCategorisTrending= await dao.sequelize.query(
        `SELECT top(3) * FROM Categories`, { raw: true, nest: true }
    )
    return res.status(200).send(getCategorisTrending)


   
}







module.exports = {
    getTopCategoris,
    getCategorisTrending
}