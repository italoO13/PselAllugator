module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Product_invetory', {
      id: {
        primaryKey: true, 
        autoIncrement: true, 
        type: Sequelize.INTEGER,
      },
      product_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Products',
          key:'id'
        },
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      }

    })
  },

  down: async(queryInterface) => {
    await queryInterface.dropTable('Product_invetory');
  }
}