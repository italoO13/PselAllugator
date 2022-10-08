module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Product_category', {
      id: {
        primaryKey: true, 
        autoIncrement: true, 
        type: Sequelize.INTEGER,
      },
      type_category: {
        allowNull: false,
        type: Sequelize.STRING,
      }

    })
  },

  down: async(queryInterface) => {
    await queryInterface.dropTable('teams');
  }





}