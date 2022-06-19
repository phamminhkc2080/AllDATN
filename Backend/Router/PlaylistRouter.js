var express = require('express');
//Use router funtion from express
var router = express.Router();
    //requie teacher controller
const applicantController = require("../src/PlaylistController")
    //handles post request with url 
router.get('/get-playlist-user', applicantController.getPlayListUser);
router.post('/add-playlist-user', applicantController.addPlaylistUser);
router.post('/add-songs-playlist', applicantController.addSongPlaylist);


// export router to use in index file
module.exports = router;