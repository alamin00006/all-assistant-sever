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
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@allassistant.23iq4ty.mongodb.net/allassistant?retryWrites=true&w=majority`;

const connectWithDB = () => {
  mongoose
    .connect(uri, options)
    .then(() => {
      console.log("database connection succefully");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectWithDB;
