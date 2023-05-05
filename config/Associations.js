const Usuario = require ("../src/models/Usuarios")
const Agenda = require ("../src/models/Agendas")

Usuario.hasMany (Agenda, {onDelete: "CASCADE", onUpdate: "CASCADE"})

Agenda.belongsTo (Usuario, {foreingKey: "usuarioId", as: "usuario"})

module.exports= {Usuario,Agenda}