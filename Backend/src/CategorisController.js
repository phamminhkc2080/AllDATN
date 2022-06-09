const dao = require('../Dao/Connection')
const file = require('../Server/fileUpload')
/*function*/


const getTopCategoris = async (req, res) => {

    const getTopCategoris= await dao.sequelize.query(
        `SELECT top(5) * FROM Categoris`, { raw: true, nest: true }
    )
    return res.status(200).send(getTopCategoris)
}





module.exports = {
    getTopCategoris
}