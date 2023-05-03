const Usuario = require ("../models/Usuarios")
const Agenda = require ("../models/Agendas")


module.exports = async function (req,res) {
    const {id,IdTableDelete} = req.params


const op =  await Agenda.findAll ({
    where: {
        id: IdTableDelete,
        usuarioId: id
    }
})


if (op.length === 0) {
    return res.send ({msg:"Essa coluna já foi apagada ou não existe!!"})
}

 await op[0].destroy ()



 res.json ({msg: "tabela deletada!"})
//  res.send (deleteTable.agendas)
}