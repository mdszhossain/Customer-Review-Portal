const express = require("express");
const router = express.Router();
const reviewFormController = require("../controller/reviewFormController");
const wrapAsync = require("../utils/wrapAsync");

router.get("/reviewForm", wrapAsync(reviewFormController.renderReviewForm));

module.exports = router;