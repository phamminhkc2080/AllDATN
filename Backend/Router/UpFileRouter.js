var express = require('express');
//Use router funtion from express
var router = express.Router();
    //requie teacher controller
const applicantController = require("../src/UpFileController")
    //handles post request with url /api/login
router.post('/uploadFileImage', applicantController.uploadImage);
router.post('/uploadFileAudio', applicantController.uploadAudio);


// export router to use in index file
module.exports = router;