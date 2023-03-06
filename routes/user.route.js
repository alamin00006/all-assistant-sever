const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const verifyToken = require("../middleware/verfyToken");
router.route("/").get(userController.allUser);

router.route("/signup").post(userController.createUser);

router.route("/login").post(userController.createLogin);

router.route("/me").get(verifyToken, userController.getMe);
router.route("/").get(userController.allUser);
router.route("/:id").patch(userController.updateuser);

module.exports = router;
