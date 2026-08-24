const { reviewSchema } = require("../validation/reviewValidation");
const ExpressError = require("../utils/ExpressError");

const validateReview = async (req, res, next) => {
  const result = reviewSchema.validate(req.body);
  const { error } = result;
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  }
  next();
};

module.exports = { validateReview };
