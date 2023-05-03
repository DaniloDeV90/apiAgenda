const Usuario = require  ("../models/Usuarios")
const jwt = require ("jsonwebtoken")
require ("dotenv").config ()



module.exports = async function (req,res) {
    const {Email,Senha} = req.body

const Verificar = await Usuario.findAll ({
    where:{
        Email,
        Senha
    }
})

if (!Verificar) {
   return  res.send ({msg: "Esse usuario nao existe"})

}

try {
const secreto = process.env.SECRET

const payload = {
    id: Verificar[0].id,
    iat: Date.now ()
}

const token  = jwt.sign (payload, secreto)


res.send ( {token, id:Verificar[0].id})

}catch (error) {
    res.send ({erro:"Nome ou email incorreto"})
}



}