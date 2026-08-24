const Review = require("../models/reviewModel");

module.exports.renderReviewForm = async(req, res) => {
    res.render("reviewForm.ejs");
}
module.exports.renderSuccessPage = async(req, res) => {
    res.render("successPage.ejs");
}
module.exports.submitReview = async(req, res) => {
    const {star, message, customerName, phone} = req.body;
    const newReview = new Review({star, message, customerName, phone});
    await newReview.save();
    res.redirect("/crp/reviewForm/success");
}