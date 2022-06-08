require("dotenv").config();
//libraly to create uuid id
const { v4: uuidv4 } = require("uuid");
//handle path file
var getpath = require("path");

    //module to manager file system
const fs = require("fs");


const fileUploadImage=async (files)=>{
    const filePath='storage/image/'+uuidv4()+getpath.extname(files.name)
   await  files.mv(filePath, function(err) {
        if (err)
          return console.log(err);
    
      });
      return filePath

}
const fileUploadAudio=async (files)=>{
    const filePath='storage/audio/'+uuidv4()+getpath.extname(files.name)
   await  files.mv(filePath, function(err) {
        if (err)
          return console.log(err);
    
      });
      return filePath

}
module.exports = {
    fileUploadImage,
    fileUploadAudio
};