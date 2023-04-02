const express = require("express");
const router = express.Router();
const shiftingOutOrderController = require("../controllers/shiftingOutOrder.controller");
router
  .route("/")
  .post(shiftingOutOrderController.createSiftingOutOrder)
  .get(shiftingOutOrderController.getShiftingOutOrders);
router.route("/:id").delete(shiftingOutOrderController.deleteShiftingOutOrder);

module.exports = router;
