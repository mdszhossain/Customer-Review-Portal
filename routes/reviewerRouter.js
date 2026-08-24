const express = require("express");
const router = express.Router();
const reviewFormController = require("../controller/reviewFormController");
const wrapAsync = require("../utils/wrapAsync");
const { validateReview } = require("../middlewares/validateReview");

router.get("/reviewForm", wrapAsync(reviewFormController.renderReviewForm));
router.post(
  "/reviewForm",
  validateReview,
  wrapAsync(reviewFormController.submitReview),
);

module.exports = router;
