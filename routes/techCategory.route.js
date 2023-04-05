const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/technicianCategory.controller");
router
  .route("/")
  .post(categoryController.createTechCategory)
  .get(categoryController.getTechCategories);
router.route("/:id").get(categoryController.getTechCategoryDetails);

module.exports = router;
