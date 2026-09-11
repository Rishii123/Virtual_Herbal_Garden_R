const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.get("/", authController.showLogin);
router.get("/login", authController.showLogin);
router.get("/signup", authController.showSignup);

router.post("/signup", authController.signup);
router.post("/login", authController.login);

module.exports = router;
