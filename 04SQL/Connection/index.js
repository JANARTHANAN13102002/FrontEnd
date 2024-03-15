const {Sequelize} = require("sequelize");

const sequelize = new Sequelize('Learning', 'postgres', 'janarthanan2002', {
    host : 'localhost',
    port : 5000 ,
    dialect : 'postgres'
})

const testDbConnection = async () => {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };
  
module.exports = { sq: sequelize, testDbConnection };