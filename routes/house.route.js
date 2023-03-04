const express = require("express");
const router = express.Router();
const houseController = require("../controllers/house.controller");
const houseFile = require("../middleware/uploader");

router
  .route("/")
  .get(houseController.getHouses)
  .post(houseFile, houseController.createHouse);

router.route("/:id").patch(houseController.updateHouse);
router
  .route("/:id")
  .get(houseController.getHouseDetails)
  .delete(houseController.deleteHouse);

module.exports = router;
