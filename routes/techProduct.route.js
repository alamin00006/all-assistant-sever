const express = require("express");
const router = express.Router();
const techProductController = require("../controllers/technicianProduct.controller");

const techFile = require("../middleware/techUploader");

router
  .route("/")
  .get(techProductController.getTechProducts)
  .post(techFile, techProductController.createTechProduct);

router.route("/:id").patch(techProductController.updateTechProduct);
router
  .route("/:id")
  .get(techProductController.getTechProductDetails)
  // router.route('/').get(productController.getAllProductsManage)
  .delete(techProductController.deleteTechProduct);
