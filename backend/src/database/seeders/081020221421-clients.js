module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Clients', 
      [
        {
          name:'Italo',
          email: 'italo@gmail.com',
          password:'secret',
          cpf:'1145487855'
        },
      ]
    )
  }

}