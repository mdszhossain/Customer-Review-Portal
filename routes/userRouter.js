const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const userController = require("../controller/userController");
const { validateSignin } = require("../middlewares/validateSignin");
const { validateSignup } = require("../middlewares/validateSignup");

router.get("/signup", wrapAsync(userController.renderSignupPage));
router.get("/signin", wrapAsync(userController.renderSigninPage));
router.post("/signup", validateSignup, wrapAsync(userController.registerUser));

module.exports = router;
