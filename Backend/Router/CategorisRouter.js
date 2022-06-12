var express = require('express');
//Use router funtion from express
var router = express.Router();
    //requie teacher controller
const applicantController = require("../src/CategorisController")
    //handles post request with url /api/login
router.get('/getTopCategoris', applicantController.getTopCategoris);
router.get('/getCategorisTrending', applicantController.getCategorisTrending);



// export router to use in index file
module.exports = router;