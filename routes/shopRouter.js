const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const shopController = require("../controller/shopController");

router.get("/createShop", wrapAsync(shopController.renderCreateShopPage));
router.post("/createShop", wrapAsync(shopController.createShop));
router.delete("/deleteShop/:id", wrapAsync(shopController.deleteShop));

module.exports = router;