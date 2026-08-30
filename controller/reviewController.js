const Shop = require("../models/shopModel");
module.exports.renderShopReviewPage = async (req, res) => {
  const { id } = req.params;
  const shop = await Shop.findOne({ _id: id });
  res.render("reviewPage.ejs", { shop });
};
