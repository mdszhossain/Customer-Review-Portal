const Shop = require("../models/shopModel");
const Review = require("../models/reviewModel");
module.exports.renderShopReviewPage = async (req, res) => {
  const { id } = req.params;
  const shop = await Shop.findOne({ _id: id });
  const reviews = await Review.find({ shopId: id });
  let totalReviews = reviews.length;
  let totalRating = 0;
  for (review of reviews) {
    totalRating += review.star;
  }
  let averageRating = totalRating / totalReviews;
  let reviews4 = await Review.find({ shopId: id, star: 4 });
  let reviews5 = await Review.find({ shopId: id, star: 5 });
  let reviews1To3 = await Review.find({ shopId: id, star: { $gte: 1, $lte: 3 } });
  console.log(reviews1To3);
  res.render("reviewPage.ejs", {
    shop,
    reviews,
    totalReviews,
    averageRating,
    reviews1To3,
    reviews4,
    reviews5,
  });
};
