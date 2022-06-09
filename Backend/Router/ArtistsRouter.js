var express = require('express');
//Use router funtion from express
var router = express.Router();
    //requie teacher controller
const applicantController = require("../src/ArtistsController")
    //handles post request with url 
router.get('/getTopArtists', applicantController.getTopArtists);


// export router to use in index file
module.exports = router;