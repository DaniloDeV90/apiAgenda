'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async  (queryInterface, Sequelize) => {
    await  queryInterface.createTable ("agendas", {
id: {
type: Sequelize.INTEGER,
allowNull: false,
autoIncrement: true,
primaryKey: true
},
Titulo: {
type: Sequelize.STRING,
allowNull: false
},
usuarioId: {
type: Sequelize.INTEGER,
references: {model:"usuarios", key:"id"},
onUpdate: "CASCADE",
onDelete: "CASCADE"
},

Conteudo: {
type: Sequelize.TEXT,
allowNull: false
},
createdAt: {
type: Sequelize.DATE,

},

updatedAt:  {
  type: Sequelize.DATE

},
   
})},

down: async  (queryInterface, Sequelize) => {
await queryInterface.dropTable ("agendas")
}
};
