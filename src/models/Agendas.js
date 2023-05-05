const {DataTypes} = require ("sequelize")
const sequelize = require ("../../config/Sequelize")


const Agenda = sequelize.define ("agendas", {
    Titulo: DataTypes.STRING,
    Conteudo: DataTypes.TEXT,
    usuarioId: DataTypes.INTEGER
})

module.exports = Agenda