const Joi = require("joi");
const signupSchema = Joi.object({
  fullName: Joi.string()
    .trim()
    .pattern(/^[A-Za-z]+(?:\s[A-Za-z]+)*$/)
    .required(),
  username: Joi.string()
    .trim()
    .pattern(/^[A-Za-z0-9@]+$/)
    .required(),
  email: Joi.string()
    .trim()
    .pattern(/^[A-Za-z0-9]+@(gmail\.com|yahoo\.com|outlook\.com)$/)
    .required(),
  phone: Joi.string()
    .trim()
    .pattern(/^[0-9]+$/)
    .required(),
  password: Joi.string()
    .trim()
    .pattern(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9\s])[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]+$/,
    )
    .required(),
});

module.exports = { signupSchema };
