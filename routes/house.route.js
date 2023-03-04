const express = require("express");
const router = express.Router();
const houseController = require("../controllers/house.controller");
const houseFile = require("../middleware/uploader");
// const verifyToken = require("../middleware/verifyToken");
// router.post('/file-upload', uploader.single('image'), productController.fileUpload)

router
  .route("/")
  .get(houseController.getHouses)
  .post(houseFile, houseController.createHouse);

// router.route("/:id").patch(houseController.updateProduct);
router
  .route("/:id")
  .get(houseController.getHouseDetails)
  .delete(houseController.deleteHouse);
//   // router.route('/').get(productController.getAllProductsManage)

module.exports = router;
