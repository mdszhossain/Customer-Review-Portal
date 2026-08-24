const express = require("express");
const router = express.Router();
const reviewFormController = require("../controller/reviewFormController");
const wrapAsync = require("../utils/wrapAsync");

router.get("/reviewForm", wrapAsync(reviewFormController.renderReviewForm));
router.get("/reviewForm/success", wrapAsync(reviewFormController.renderSuccessPage));
router.post("/reviewForm", wrapAsync(reviewFormController.submitReview));

module.exports = router;