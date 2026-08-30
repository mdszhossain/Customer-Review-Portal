const Review = require("../models/reviewModel");
const Shop = require("../models/shopModel");
const QRCode = require("qrcode");

module.exports.renderReviewForm = async (req, res) => {
  const {id} = req.params;
  res.render("reviewForm.ejs", {id});
};
module.exports.submitReview = async (req, res) => {
  const { star, message, customerName, phone } = req.body;
  const { id } = req.params;
  const shop = await Shop.findOne({ _id: id });
  const newReview = new Review({ star, message, customerName, phone, shopId: shop });
  await newReview.save();
  // res.redirect("/crp/reviewForm/success");
  res.render("successPage.ejs", { star, shop });
};

module.exports.qrCodeGen = async (req, res) => {
  const { id } = req.params;
  const reviewUrl = `${req.protocol}://${req.get("host")}/crp/${id}/reviewForm`;
  const qrDataUrl = await QRCode.toDataURL(reviewUrl);
  res.render("qrcode.ejs", { qrDataUrl, reviewUrl });
};
