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
    from Songs inner join Artist on Songs.idArtist = Artist.idArtist ORDER BY Songs.viewSong desc`,
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
    if (req.query.id) {
      const query = `Select Songs.idSong,Songs.name as namesong,Songs.cover,Songs.dir,Artist.name as nameartists,Songs.likes from Artist 
                      inner join Songs on Artist.idArtist = Songs.idArtist
                      inner join Categories on Songs.idCategoris = Categories.idCategoris 
                      where Categories.idCategoris=${req.query.id} order by Songs.likes desc`;

      const getSongsCategory = await dao.sequelize.query(query, {
        raw: true,
        nest: true,
      });

      return res.status(200).send(getSongsCategory);
    }
    return res.status(200).send([]);
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

const getSongsArtists = async (req, res) => {
  try {
    if (req.query.id) {
      const query = `select Songs.idSong,Songs.name as namesong,Songs.cover,Songs.dir,Artist.name as nameartists  
      from Artist inner join Songs on Artist.idArtist = Songs.idArtist
      where Artist.idArtist= ${req.query.id}`;

      const getSongsArtists = await dao.sequelize.query(query, {
        raw: true,
        nest: true,
      });

      return res.status(200).send(getSongsArtists);
    }
    return res.status(200).send([]);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const getSongsSearch = async (req, res) => {
  try {
    if (req.query.search) {
      const query = `select top (5) Songs.idSong,Songs.name as namesong,Songs.cover,Songs.dir,Artist.name as nameartists  
      from Artist inner join Songs on Artist.idArtist = Songs.idArtist
      where Songs.name like '%${req.query.search}%' `;

      const getSongsSearch = await dao.sequelize.query(query, {
        raw: true,
        nest: true,
      });

      return res.status(200).send(getSongsSearch);
    }
    return res.status(200).send([]);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const getSongsAlbum = async (req, res) => {
  try {
    if (req.query.id) {
      const query = `Select Songs.idSong,Songs.name as namesong,Songs.cover,Songs.dir,Artist.name as nameartists,Songs.likes from Artist 
      inner join Songs on Artist.idArtist = Songs.idArtist
       where Songs.idAlbum = ${req.query.id}`;
      const getSongsAlbum = await dao.sequelize.query(query, {
        raw: true,
        nest: true,
      });

      return res.status(200).send(getSongsAlbum);
    }
    return res.status(200).send([]);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const updateViewSong = async (req, res) => {
  try {
    if (req.body.id) {
      const query = `update Songs set viewSong=viewSong+1 where idSong= ${req.body.id}`;
      const updateViewSong = await dao.sequelize.query(query, {
        raw: true,
        nest: true,
      });

      return res.status(200).send('success!!');
    }
    return res.status(200).send('null id!');
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = {
  getAllSongs,
  upload,
  addSong,
  getTopSongs,
  getRecommended,
  getSongsCategory,
  getSongsArtists,
  getSongsSearch,
  getSongsAlbum,
  updateViewSong
};
