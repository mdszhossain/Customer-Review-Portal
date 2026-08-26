const User = require("../models/userModel");

module.exports.renderSignupPage = async (req, res) => {
  res.render("signup.ejs");
};
module.exports.renderSigninPage = async (req, res) => {
    res.render("signin.ejs");
//   res.render("signupSuccess.ejs");
};
module.exports.registerUser = async (req, res) => {
  const { fullName, username, email, phone, password } = req.body;
  console.log(req.body);
  const newUser = new User({ fullName, username, email, phone });
  const registeredUser = await User.register(newUser, password);
  res.render("signupSuccess.ejs");
};
