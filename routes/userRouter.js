const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const userController = require("../controller/userController");
const { validateSignin } = require("../middlewares/validateSignin");
const { validateSignup } = require("../middlewares/validateSignup");
const passport = require("passport");

router.get("/signup", wrapAsync(userController.renderSignupPage));
router.get("/signin", wrapAsync(userController.renderSigninPage));
router.post("/signup", validateSignup, wrapAsync(userController.registerUser));
router.post(
  "/signin",
  validateSignin,
  passport.authenticate("local", { failureRedirect: "/crp/signinError" }),
  wrapAsync(userController.signinUser),
);
router.get("/signinError", wrapAsync(userController.signinError));
router.post("/signout", wrapAsync(userController.signoutUser));

module.exports = router;
