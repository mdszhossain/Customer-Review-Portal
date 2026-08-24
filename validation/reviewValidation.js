const Joi = require("joi");
const reviewSchema = Joi.object({
  star: Joi.number().required().min(1).max(5),
  message: Joi.string().trim().required(),
  customerName: Joi.string().trim().required(),
  phone: Joi.string().trim().required(),
});

module.exports = { reviewSchema };
