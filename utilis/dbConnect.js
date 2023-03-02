const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  autoIndex: true,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4,
};
const uri = process.env.DATABASE;

const connectWithDB = () => {
  mongoose
    .connect(uri, options)
    .then(() => {
      console.log("database connection succefull");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectWithDB;
