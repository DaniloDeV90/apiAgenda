'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up:  async (queryInterface, Sequelize) => {
  
    await queryInterface.createTable ("usuarios", {
      id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
      },
      Nome: {
        type: Sequelize.STRING,
        allowNull: false

      },
      Email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Senha: {
         type: Sequelize.STRING,
         allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE

      },
      updatedAt: {
        type: Sequelize.DATE
      }
      
    })
  },

  down: async  (queryInterface, Sequelize)  => {
    await queryInterface.dropTable ("usuarios")
  }
};
