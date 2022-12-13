const Joi = require("joi");

async function cadValidation(req, res, next) {
  try {
    const cad = Joi.object({
      nomeUser: Joi.string().empty().required().messages({
        "string.empty": `"nomeUser" não pode ser vazio`,
        "any.required": `"nomeUser" é obrigatório`
      }),
      email: Joi.string().email().empty().required().messages({
        "string.empty": `"email" não pode ser vazio`,
        "any.required": `"email" é obrigatório`
      }),
      senha: Joi.string().min(4).max(10).empty().required().messages({
        "string.empty": `"senha" não pode ser vazio`,
        "any.required": `"senha" é obrigatório`
      }),
      status: Joi.number().integer().max(2).empty().required().messages({
        "string.empty": `"status" não pode ser vazio`,
        "any.required": `"status" é obrigatório`
      }),
    });

    const {error} = cad.validate(req.body)
    if(error){
        console.log(error)
        throw Error(error)
    }
    
    return next();
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
}

module.exports = cadValidation
