const mongoose = require("mongoose");
require("dotenv").config();
const DbConnect = require("./utilis/dbConnect");
const app = require("./app");

DbConnect();

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("app is running");
});
