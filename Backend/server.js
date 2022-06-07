
//use express js to create server
const express = require('express');
//create app var to store server
const app = express();

const server=require('http').createServer(app)

const io = require('socket.io')(server,{
   cors: {
     origin: '*',
   }
 });


//   // code sample
//   io.emit('test', "msg");


module.exports = {
   app,
   express,
   io,
   server
}