//rotas exclusivas para o desktop (1)

async function verifyStatus(req, res, next){
    const verify = req.body.status

    try{
        if(verify = 1){
            res.status(200)
        }
    }catch{}
}