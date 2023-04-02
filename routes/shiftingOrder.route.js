const express = require("express");
const router = express.Router();
const shiftingOrderController = require("../controllers/shiftingOrdre.controller");
router
  .route("/")
  .post(shiftingOrderController.createSiftingOrder)
  .get(shiftingOrderController.getShiftingOrders);
router.route("/:id").delete(shiftingOrderController.deleteShiftingOrder);

module.exports = router;
