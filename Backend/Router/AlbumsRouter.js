var express = require('express');
//Use router funtion from express
var router = express.Router();
    //requie teacher controller
const applicantController = require("../src/AlbumController")
    //handles post request with url 
router.get('/get-albums', applicantController.getAlbums);



// export router to use in index file
module.exports = router;