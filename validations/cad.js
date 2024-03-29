const Joi = require("joi");
const { messages } = require("joi-translation-pt-br");

async function cadValidation(req, res, next) {
  try {
    const cad = Joi.object({
      abortEarly: false,
      messages : messages,
      nomeUser: Joi.string().empty().required().messages({
        "string.empty": `"nome" não pode ser vazio`,
        "any.required": `"email" é obrigatório`,
      }),
      email: Joi.string().email().empty().required().messages({
        "string.empty": `"email" não pode ser vazio`,
        "any.required": `"email" é obrigatório`,
      }),
      senha: Joi.string().min(4).max(12).empty().required().messages({
        
        "string.empty": `"nome" não pode ser vazio`,
        "any.required": `"email" é obrigatório`,
      }),
      status: Joi.number().integer().max(2).empty().required().messages({
        "string.empty": `"status" não pode ser vazio`,
        "any.required": `"status" é obrigatório`,
      }),
    });

    const { error } = cad.validate(req.body);
    if (error) {
      console.log(error);
      throw Error(error);
    }

    return next();
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
}

module.exports = cadValidation;
