module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Clients', 
      [
        {
          name:'Italo',
          email: 'italo@gmail.com',
          password:'$2a$10$Elh/xNe4WqsH8qxlNjBT9.8lGNe7l81yzKNM9neoMRY9Rbf4BXKz6',
          cpf:'1145487855'
        },
      ]
    )
  }

}