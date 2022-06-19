const dao = require("../Dao/Connection");
/*function*/


const getPlayListUser = async (req, res) => {
  try {
    if (req.query.id) {
      const getPlayListUser = await dao.sequelize.query(
        `select * from Playlists where idUser=${req.query.id}`,
        { raw: true, nest: true }
      );
      return res.status(200).send(getPlayListUser);
    }
    return res.status(200).send([]);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const addPlaylistUser = async (req, res) => {
  try {
    if (req.body.name && req.body.idUser) {
      const addPlaylistUser = await dao.sequelize.query(
        `Insert into Playlists(name,cover,icon,idUser) values (N'${req.body.name}','storage/image/sontungmtp.webp','storage/image/sontungmtp.webp',${req.body.idUser})`,
        { raw: true, nest: true }
      );
      return res.status(200).send('success!!');
    }
    return res.status(500).send('error');
  } catch (error) {
    return res.status(500).send(error);
  }
};

const addSongPlaylist = async (req, res) => {
  try {
    if (req.body.idPlaylist && req.body.idSong) {
      const addSongPlaylist = await dao.sequelize.query(
        `Insert into SongsPlaylist(idSong,idPlaylist) values (${req.body.idSong},${req.body.idPlaylist})`,
        { raw: true, nest: true }
      );
      return res.status(200).send('success!!');
    }
    return res.status(500).send('error');
  } catch (error) {
    return res.status(500).send(error);
  }
};


module.exports = {
  getPlayListUser,
  addPlaylistUser,
  addSongPlaylist
};
