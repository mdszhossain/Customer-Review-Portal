const Review = require("../models/reviewModel");
const QRCode = require("qrcode");

module.exports.renderReviewForm = async (req, res) => {
  console.log(req.originalUrl);
  res.render("reviewForm.ejs");
};
module.exports.submitReview = async (req, res) => {
  const { star, message, customerName, phone } = req.body;
  const newReview = new Review({ star, message, customerName, phone });
  await newReview.save();
  // res.redirect("/crp/reviewForm/success");
  res.render("successPage.ejs", { star });
};

module.exports.qrCodeGen = async (req, res) => {
    const {id} = req.params;
    const reviewUrl = `${req.protocol}://${req.get("host")}/crp/${id}/reviewForm`;
    const qrDataUrl = await QRCode.toDataURL(reviewUrl);
    res.render("qrcode.ejs", {qrDataUrl, reviewUrl});
};
