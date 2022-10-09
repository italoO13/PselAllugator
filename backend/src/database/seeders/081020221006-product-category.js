module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Product_category', 
      [
        {
          type_category:'Entrada'
        },
        {
          type_category:'Intermediário'
        },
        {
          type_category:'Top de linha'
        },
      ]
    )
  }

}