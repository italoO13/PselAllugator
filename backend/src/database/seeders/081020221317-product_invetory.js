module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Product_inventory', 
      [
        {
          product_id:1
        },
        {
          product_id:1
        },
        {
          product_id:2
        },
        {
          product_id:2
        },
        {
          product_id:1
        },
        {
          product_id:3
        },
        {
          product_id:3
        },
        {
          product_id:2
        },
        {
          product_id:1
        },
      ]
    )
  }

}