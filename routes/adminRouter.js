const express = require("express");
const router = express.Router();
const adminController = require("../controller/adminController");
const wrapAsync = require("../utils/wrapAsync");

router.get("/adminPanel", wrapAsync(adminController.renderAdminPanel));

module.exports = router;