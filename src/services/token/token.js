const { sign } = require("jsonwebtoken");
require("dotenv").config();

class TokenServices {
  async gerarToken(info) {
    console.log("info token :", info);
    return sign(info, process.env.SECRET, {
      expiresIn: 900,
    });
  }
  async validateToken() {
    const token = json(token);
  }
}

module.exports = new TokenServices();
