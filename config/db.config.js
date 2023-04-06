/*module.exports = {
    HOST: process.env.host,
    USER: process.env.user,
    PASSWORD: process.env.password,
    DB: process.env.database,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  */

 

const mongoose = require('mongoose');

const { MONGO_URI } = process.env;

exports.connect = () => {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log({ message: "Successfully connected to database", level: "info" });
        })
        .catch((err) => {
            console.log("Database connection failed. Exiting now...");
            console.log({ message: err, level: 'error' });
            process.exit(1);
        })
}