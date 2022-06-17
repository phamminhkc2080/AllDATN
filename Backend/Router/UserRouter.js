var express = require('express');
//Use router funtion from express
var router = express.Router();
    //requie teacher controller
const applicantController = require("../src/UserController")
    //handles post request with url 
router.post('/sign-in', applicantController.signIn);


// export router to use in index file
module.exports = router;