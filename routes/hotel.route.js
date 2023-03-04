const express = require("express");
const router = express.Router();
const hotelController = require("../controllers/hotel.controller");
const houseFile = require("../middleware/uploader");

router
  .route("/")
  .get(hotelController.getHotels)
  .post(houseFile, hotelController.createHotel);

router.route("/:id").patch(hotelController.updateHotel);
router
  .route("/:id")
  .get(hotelController.getHotelDetails)
  .delete(hotelController.deleteHotel);

module.exports = router;
