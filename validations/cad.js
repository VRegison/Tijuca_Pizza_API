const Joi = require('joi');
const joiTranslation = require('joi-translation-pt-br')

async function cadValidation(req, res, next) {

  try {

    const cad = await Joi.object({

      nomeUser: Joi.string().empty().min(4).max(10).required().messages(
        {
          "string.empty": `"nomeUser" cannot be empty`,
          "any.required": `"nomeUser" is required`,
        }
      ),

      email: Joi.string().email().empty().required().messages(
        {
          "string.empty": `"email" cannot be empty`,
          "any.required": `"email" is required`,
        }
      ),

      senha: Joi.string().min(4).max(10).empty().required().messages( {
        "string.empty": `"senha" cannot be empty`,
        "any.required": `"senha" is required`,
      }),

      status: Joi.number().integer().max(2).empty().required().messages(
        {
          "number.empty": `"status" cannot be empty`,
          "any.required": `"status" is required`,
        }
      ),

    });

    const validCad = cad.validate(req.body);

    if(!validCad){
      throw Error(error);
      console.log("passou pelo if");
    }
    
    return next();

  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
    console.log(error)
  }
}

module.exports = cadValidation
