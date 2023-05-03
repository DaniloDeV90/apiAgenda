const Usuario = require ("../models/Usuarios")
const Agenda = require ("../models/Agendas")

module.exports = async function (req,res) {
    try {
        const {id} = req.params
        const {Titulo,Conteudo,idTable} = req.body
        const op =  await Agenda.findAll ({
            where: {
                id: idTable,
                usuarioId: id
            }
        })
    
    op[0].Titulo = Titulo
    op[0].Conteudo = Conteudo
    await op[0].save ()
        res.send (op[0])
    } catch (error) {
        res.send ("error")
    }
   
}