const Joi = require("joi");
const signinSchema = Joi.object({
  username: Joi.string()
    .trim()
    .pattern(/^[A-Za-z0-9@]+$/)
    .required(),
  password: Joi.string()
    .trim()
    .pattern(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9\s])[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]+$/,
    )
    .required(),
});

module.exports = { signinSchema };
