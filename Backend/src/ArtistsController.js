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

const getSearchArtists = async (req, res) => {
    try {
      if (req.query.search) {
        const query = `select top (5) * from Artist where name like '%${req.query.search}%' `;
  
        const getSearchArtists = await dao.sequelize.query(query, {
          raw: true,
          nest: true,
        });
  
        return res.status(200).send(getSearchArtists);
      }
      return res.status(200).send([]);
    } catch (error) {
      return res.status(500).send(error);
    }
  };
  





module.exports = {
    getTopArtists,
    getAllArtists,
    getSearchArtists
}