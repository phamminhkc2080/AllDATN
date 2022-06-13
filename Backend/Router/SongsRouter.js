var express = require('express');
//Use router funtion from express
var router = express.Router();
    //requie teacher controller
const applicantController = require("../src/SongsController")
    //handles post request with url /api/login
router.get('/getallsongs', applicantController.getAllSongs);
router.post('/addSong',applicantController.addSong)
router.get('/getTopSong',applicantController.getTopSongs)
router.get('/getRecommended',applicantController.getRecommended)
router.get('/get-category-songs',applicantController.getSongsCategory)
router.post('/uploadFile', applicantController.upload);
router.get('/get-artists-songs',applicantController.getSongsArtists)
router.get('/get-songs-search',applicantController.getSongsSearch)

// export router to use in index file
module.exports = router;