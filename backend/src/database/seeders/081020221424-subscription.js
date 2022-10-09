module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Subscription', 
      [
        {
          product_invent_id: 1,
          client_id:1,
          devolution:false
        },
        {
          product_invent_id: 2,
          client_id:1,
          devolution:false
        },
        {
          product_invent_id: 2,
          client_id:1,
          devolution:true
        },
        {
          product_invent_id: 3,
          client_id:1,
          date_devolution:new Date('10/08/2022'),
          devolution:true
        },
      ]
    )
  }

}