const express = require("express");
const router = express.Router();
const QRCode = require("qrcode");
const reviewFormController = require("../controller/reviewFormController");
const wrapAsync = require("../utils/wrapAsync");
const { validateReview } = require("../middlewares/validateReview");

router.get("/:id/reviewForm", wrapAsync(reviewFormController.renderReviewForm));
router.post(
  "/:id/reviewForm",
  validateReview,
  wrapAsync(reviewFormController.submitReview),
);
router.get("/:id/qrcode", wrapAsync(reviewFormController.qrCodeGen));

module.exports = router;
