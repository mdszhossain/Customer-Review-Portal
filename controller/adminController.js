const Shop = require("../models/shopModel");
module.exports.renderAdminPanel = async(req, res) => {
    const shops = await Shop.find({userId: req.user._id});
    res.render("adminPanel.ejs", {shops});
}