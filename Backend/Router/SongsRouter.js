var express = require('express');
//Use router funtion from express
var router = express.Router();
    //requie teacher controller
const applicantController = require("../src/SongsController")
    //handles post request with url /api/login
router.get('/getallsongs', applicantController.getAllSongs);
router.post('/addSong',applicantController.addSong)
router.post('/uploadFile', applicantController.upload);


// export router to use in index file
module.exports = router;