const Shop = require("../models/shopModel");

module.exports.renderCreateShopPage = async (req, res) => {
  res.render("createShop.ejs");
};
module.exports.createShop = async (req, res) => {
  const { shopname, shoplocation } = req.body;
  const newShop = new Shop({
    shopname: shopname,
    shoplocation: shoplocation,
    userId: req.user,
  });
  await newShop.save();
  res.redirect("/crp/adminPanel");
};

module.exports.deleteShop = async (req, res) => {
  const {id} = req.params;
  await Shop.deleteOne({_id: id});
  res.redirect("/crp/adminPanel");
};
