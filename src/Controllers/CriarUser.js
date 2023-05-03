const Usuario = require ("../models/Usuarios")
module.exports = async function (req,res) {

try {


    const {Nome,Email,Senha} = req.body

    const verifySiexist =await Usuario.findAll ({
        where: {
            Email
        }
    })
 if (verifySiexist.length) {
    return res.send ({error: "este email já existe"})

 }
    const oo =  await Usuario.create ({Nome,Senha,Email})

    res.send ({msg:"criado!"})
}catch (error) {
    res.send ("error")
}
} 