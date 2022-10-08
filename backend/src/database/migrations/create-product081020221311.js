module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        primaryKey: true, 
        autoIncrement: true, 
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2),
      },
      category_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Product_category',
          key:'id'
        },
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      }

    })
  },

  down: async(queryInterface) => {
    await queryInterface.dropTable('Products');
  }
}