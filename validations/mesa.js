const Joi = require("joi") 

const mesaValidation = async function(req, res, next) {
    try {
        const mesa = await Joi.object({

            status: Joi.number().empty().required().messages()

        })

        const { valid } = mesa.validateAsync(req.body)

        if (valid){
            console.log("ookkkkk")
            throw Error("whjdouwgief");
        }
    } catch (error) {
        res.status(error.status || 500).send({ message: error.message }); 
    }
}
module.exports = mesaValidation;