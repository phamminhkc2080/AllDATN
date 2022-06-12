const dao = require("../Dao/Connection");
const file = require("../Server/fileUpload");
/*function*/

const getAllSongs = async (req, res) => {
  const getallsongs = await dao.sequelize.query(`Select * from Songs`, {
    raw: true,
    nest: true,
  });
  return res.status(200).send(getallsongs);
};
const getRecommended = async (req, res) => {
  const getRecommended = await dao.sequelize.query(
    `select top (5) Songs.idSong,Songs.name as namesong, Songs.cover,Songs.dir,Songs.likes,Artist.name as nameartists
        from Songs inner join Artist on Songs.idArtist = Artist.idArtist ORDER BY NEWID()`,
    { raw: true, nest: true }
  );
  return res.status(200).send(getRecommended);
};

const getTopSongs = async (req, res) => {
  const getTopSongs = await dao.sequelize.query(
    `select top (5) Songs.idSong,Songs.name as namesong, Songs.cover,Songs.dir,Songs.likes,Artist.name as nameartists
        from Songs inner join Artist on Songs.idArtist = Artist.idArtist ORDER BY Songs.likes desc`,
    { raw: true, nest: true }
  );
  return res.status(200).send(getTopSongs);
};

const getSongsCategory = async (req, res) => {
  try {
    const query =
      `
    Select Songs.idSong,Songs.name,Songs.cover,Songs.dir from Artist 
    inner join Songs on Artist.idArtist = Songs.idArtist 
    inner join Categoris on Songs.idCategoris = Categoris.idCategoris ` +

    // 'select * from Categoris ' +
      (req.query.id
        ? `where Categoris.idCategoris=${req.query.id}`
        : ``)
    console.log("data : ", req.query);

    const getSongsCategory = await dao.sequelize.query(
      query,
      { raw: true, nest: true }
    );

    return res.status(200).send(getSongsCategory);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const addSong = async (req, res) => {
  const getallsongs = await dao.sequelize.query(
    `Insert into Songs(name) values (N'${req.body.textname}')`,
    { raw: true, nest: true }
  );
  return res.status(200).send(getallsongs);
};

const upload = async (req, res) => {
  const path = await file.fileUpload(req.files.image);
  res.status(200).send(path);
};

module.exports = {
  getAllSongs,
  upload,
  addSong,
  getTopSongs,
  getRecommended,
  getSongsCategory,
};
