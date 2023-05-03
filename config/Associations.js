const Usuario = require ("../models/Usuarios")
const Agenda = require ("../models/Agendas")

Usuario.hasMany (Agenda, {onDelete: "CASCADE", onUpdate: "CASCADE"})

Agenda.belongsTo (Usuario, {foreingKey: "usuarioId", as: "usuario"})

module.exports= {Usuario,Agenda}