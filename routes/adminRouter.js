const express = require("express");
const router = express.Router();
const adminController = require("../controller/adminController");
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedin } = require("../middlewares/isAuthentication");

router.get("/adminPanel", isLoggedin, wrapAsync(adminController.renderAdminPanel));

module.exports = router;