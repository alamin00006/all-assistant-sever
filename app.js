const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());

const userRoute = require("./routes/user.route");

app.use("/api/v1/user", userRoute);

app.get("/", (req, res) => {
  res.send("Route is Working");
});
module.exports = app;
