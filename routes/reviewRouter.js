const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const reviewController = require("../controller/reviewController");
const router = express.Router();

router.get(
  "/adminPanel/:id/reviews",
  wrapAsync(reviewController.renderShopReviewPage),
);

module.exports = router;
