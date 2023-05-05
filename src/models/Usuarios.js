const {DataTypes}  = require ("sequelize")
const sequelize = require ("../../config/Sequelize")

const Usuario = sequelize.define ("usuarios", {

     Nome: DataTypes.STRING,
     Email: DataTypes.STRING,
     Senha: DataTypes.STRING
})

module.exports = Usuario