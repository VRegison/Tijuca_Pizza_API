const Joi = require("joi");

async function loginValidation(req, res, next) {
  try {
    const user = await Joi.object({
      email: Joi.string().empty().email().required().messages(),

      senha: Joi.string().min(4).max(10).empty().required().messages(),
    });

    const validLog = user.validate(req.body);

    if (!validLog) {
      throw Error(error);
      console.log("passou no if");
    }
    return next();
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
    console.log(error);
  }
}

module.exports = loginValidation;
