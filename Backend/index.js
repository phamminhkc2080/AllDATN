/*set up librairy*/

//use express js to create server
const server =require('./server')
const app = server.app;
const express=server.express;

//set up cors(allow frontend to call)
const cors = require('cors')
    //use env file
require('dotenv').config()
    //paste body request from frontend
let bodyParser = require('body-parser');
//upload file
const fileUpload = require('express-fileupload');
//swagger
const swaggerUi = require('swagger-ui-express');
//read swagger from yaml
const YAML = require('yamljs');
//read yaml file 
// const swaggerSpec = YAML.load('./swagger/swagger.yaml');
// pasert the cookie to read 
const cookieParser = require("cookie-parser");
// use sessions to get token from
const sessions = require('express-session');
/*end set up librairy*/

/*server*/
//time for life time session
const oneDay = 1000 * 60 * 60 * 24;
//use cookie parser
app.use(cookieParser());
//use and config session
// app.use(sessions({
//     //key for session
//     secret: process.env.SESSION_KEY,
//     //allow session to save if it Uninitialized
//     saveUninitialized:true,
//     // life time session 
//     cookie: { maxAge: oneDay, secure: false, httpOnly: false,sameSite: false },
//     // resave the token if it exit
//     resave: false,



// }));

//connect to database
require('./Dao/Connection.js');
    //use swagger

//set up cors
app.use(cors({
    origin: ["*"],
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
}));
//use static file from storage folder
app.use("/storage", express.static("storage"));
//paste body
app.use(bodyParser.json());
//paste request url
app.use(bodyParser.urlencoded({ extended: true }));
//set limit file size upload
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));

/*end server*/

/*router*/
const songRouter = require('./Router/SongsRouter')
const categorisRouter = require('./Router/CategorisRouter')
const upFileRouter = require('./Router/UpFileRouter')
const artistRouter = require('./Router/ArtistsRouter')
const albumsRouter = require('./Router/AlbumsRouter')
const usersRouter = require('./Router/UserRouter')
//create router with url api/teacher+ url in router file
app.use('/api/songs', songRouter)
app.use('/api/upfile', upFileRouter)
app.use('/api/categories', categorisRouter)
app.use('/api/artists', artistRouter)
app.use('/api/albums', albumsRouter)
app.use('/api/users', usersRouter)


server.server.listen(process.env.PORT||8000, () => {

    console.log("server and websocket listening on port 8000!");
});



//                      _oo0oo_
//                     o8888888o
//                     88" . "88
//                     (| -_- |)
//                     0\  =  /0
//                   ___/`---'\___
//                 .' \\|     |# '.
//                / \\|||  :  |||# \
//               / _||||| -:- |||||- \
//              |   | \\\  -  #/ |   |
//              | \_|  ''\---/''  |_/ |
//              \  .-\__  '-'  ___/-. /
//            ___'. .'  /--.--\  `. .'___
//         ."" '<  `.___\_<|>_/___.' >' "".
//        | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//        \  \ `_.   \_ __\ /__ _/   .-` /  /
//    =====`-.____`.___ \_____/___.-`___.-'=====
//                      `=---='
//
//
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//      please do not BUG