
//read .env file
require('dotenv').config()
//use sequelize library to connect to database
const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('AppMusic_DATN', 'sa',  '12345678',{
  dialect:  'mssql',
  host:  'localhost',
  dialectOptions: {
    // Observe the need for this nested `options` field for MSSQL
    options: {
      // Your tedious options here
      freezeTableName:true,
      timestamps:false,
      trustedConnection: true,
      encrypt: true
    }
  }
});
//uncomment this if you do not have database yet
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports.sequelize = sequelize;