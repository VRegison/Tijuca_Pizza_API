const Joi = require("joi");

async function loginValidation(req, res, next) {
  try {
    const user = Joi.object({
      email: Joi.string().empty().email().required().messages({
        "string.empty": `"email" não pode ser vazio`
      }),
      senha: Joi.string().min(4).max(10).empty().required(),
    });
    const { error } = user.validate(req.body);
    if (error) {
        console.log(error)
      throw Error(error);
    }
    return next();
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
}

module.exports = loginValidation;
