module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Subscription', 
      [
        {
          product_invetory: 1,
          client_id:1,
          devolution:false
        },
        {
          product_invetory: 2,
          client_id:1,
          devolution:false
        },
        {
          product_invetory: 3,
          client_id:1,
          data_devolution:new Date('10/08/2022'),
          devolution:true
        },
      ]
    )
  }

}