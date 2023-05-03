const Usuario = require ("../models/Usuarios")
const Agenda = require ("../models/Agendas")

module.exports = async function (req,res) {

    try {

    
    const {idUser} = req.params
    const {Titulo,Conteudo} = req.body

    const verificacao = await Usuario.findByPk (idUser)

    if (!verificacao) {
        res.send ("essa tabela nao existe!!!!")

    }

const AGend = await Agenda.create ({Titulo,usuarioId:idUser, Conteudo})
    
res.send (AGend)
    } catch (error) {
        res.send (error)
    }
}