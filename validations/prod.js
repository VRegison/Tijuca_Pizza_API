const Joi = require("joi");

async function ValidadeProd(req, res, next) {
  try {
    const authSchema = Joi.object({
      idCategoria: Joi.number().empty().required().min(1).max(5).messages({
        "number.empty": `"Categoria" não pode ser vazia`,
        "any.required": `"Categoria" campo obrigatório`,
        "number.min": `"Categoria" só recebe o caracteres 1 ou 5`,
        "number.max": `"Categoria" só recebe o caracteres 1 ou 5`,
      }),
      nomeProduto: Joi.string().empty().required().messages({
        "string.empty": `"Nome" não pode ser vazia`,
        "any.required": `"Nome" campo obrigatório`,
      }),
      valor: Joi.number().empty().required().min(1).max(2).messages({
        "string.empty": `"Valor" não pode ser vazia`,
        "any.required": `"Valor" campo obrigatório`,
        "number.min": `"Valor"  só recebe o caracteres 1 ou 2`,
        "number.max": `"Valor" só recebe o caracteres 1 ou 2`,
      }),
      descricao: Joi.number().empty().required().min(1).max(2).messages({
        "string.empty": `"Descrição" não pode ser vazia`,
        "any.required": `"StaDescriçãotus" campo obrigatório`,
        "number.min": `"Descrição"  só recebe o caracteres 1 ou 2`,
        "number.max": `"Descrição" só recebe o caracteres 1 ou 2`,
      }),
      statusProduto: Joi.number().empty().required().min(1).max(2).messages({
        "string.empty": `"Status" não pode ser vazia`,
        "any.required": `"Status" campo obrigatório`,
        "number.min": `"Status"  só recebe o caracteres 1 ou 2`,
        "number.max": `"Status" só recebe o caracteres 1 ou 2`,
      }),
    });
    const { error } = authSchema.validate(req.body, { abortEarly: false });
    if (error) {
      throw Error(error);
    }
    return next();
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
}

module.exports = ValidadeProd;
