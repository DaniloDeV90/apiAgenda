const Agenda = require("../models/Agendas")
const Usuario = require ("../models/Usuarios")

module.exports = async function (req,res) {
    const {id} = req.params

    const procurar = await Usuario.findByPk (id, {
        include: Agenda,
         attributes: {exclude: ['Senha','Email'] } 
    })

    res.send (procurar)
}