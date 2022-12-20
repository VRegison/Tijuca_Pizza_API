const jwt = require("jsonwebtoken");

function verifyJWT(req, res, next){
    const token = req.headers['x-access-token']
    jwt.verify(token, process.env.SECRET, (err, decoded)=>{
        if(err){
            console.log("caiu aqui")            
            return res.status(401).end()
        } 
        req.IdUser = decoded.IdUser
        next()
    })
}

module.exports = verifyJWT 