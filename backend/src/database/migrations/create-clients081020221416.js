module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Clients', {
      id: {
        primaryKey: true, 
        autoIncrement: true, 
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull:false,
        type: Sequelize.STRING,
      },
      email: { 
        allowNull:false,
        type: Sequelize.STRING,
      },
      password: { 
        allowNull:false,
        type: Sequelize.STRING,
      },
      cpf: { 
        allowNull:false,
        type: Sequelize.STRING,
      },
    })
  },

  down: async(queryInterface) => {
    await queryInterface.dropTable('Clients');
  }
}