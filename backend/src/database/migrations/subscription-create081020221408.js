module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Subscription', {
      id: {
        primaryKey: true, 
        autoIncrement: true, 
        type: Sequelize.INTEGER,
      },
      date_init: {
        type:"TIMESTAMP",
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      date_devolution: {
        type:"TIMESTAMP",
      },
      product_invent_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Product_inventory',
          key:'id'
        },
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      client_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Clients',
          key:'id'
        },
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      devolution:{
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      }

    })
  },

  down: async(queryInterface) => {
    await queryInterface.dropTable('Subscription');
  }
}