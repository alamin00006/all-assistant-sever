const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());
app.use("/public/uploads", express.static("public/uploads"));
const userRoute = require("./routes/user.route");
const houseRoute = require("./routes/house.route");
const hotelRoute = require("./routes/hotel.route");
const orderRoute = require("./routes/order.route");

app.use("/api/v1/user", userRoute);
app.use("/api/v1/house", houseRoute);
app.use("/api/v1/hotel", hotelRoute);
app.use("/api/v1/order", orderRoute);

app.get("/", (req, res) => {
  res.send("Route is Working");
});
module.exports = app;
