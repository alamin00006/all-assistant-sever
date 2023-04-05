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
const shifingCityOrder = require("./routes/shiftingOrder.route");
const shifingOutCityOrder = require("./routes/shiftingOutOrder.route");
const categoryRoute = require("./routes/category.route");

app.use("/api/v1/user", userRoute);
app.use("/api/v1/house", houseRoute);
app.use("/api/v1/hotel", hotelRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/shifting-city", shifingCityOrder);
app.use("/api/v1/shifting-out-city", shifingOutCityOrder);
app.use("/api/v1/tech-category", categoryRoute);

app.get("/", (req, res) => {
  res.send("Route is Working");
});

app.use((err, req, res, next) => {
  if (err.message) {
    res.status(500).send(err.message);
  } else {
    res.status(500).send("There was an error");
  }
});
module.exports = app;
