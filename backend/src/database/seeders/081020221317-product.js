module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Products', 
      [
        {
          name:'Smartphone Motorola Moto G22',
          description: '128GB 4G Wi-Fi Tela 6.5 Dual Chip 4GB RAM Câmera Quádrupla + Selfie 16MP',
          image:'https://images-americanas.b2w.io/produtos/01/00/img/4818919/7/4818919742_1SZ.jpg',
          price:1193.94,
          category_id:1
        },
        {
          name:'Smartphone xiaomi redmi note 11 pro',
          description: '/ tela 6,67 / 6GB / 128GB / 5G / dual chip',
          image:'https://images-americanas.b2w.io/produtos/5931011752/imagens/smartphone-xiaomi-redmi-note-11-pro-azul-tela-6-67-6gb-128gb-5g-dual-chip-preto/5931011779_1_xlarge.jpg',
          price:2500.94,
          category_id:2
        },
        {
          name:'Apple iPhone 14 ',
          description: '128GB iOS 5G Wi-Fi Tela 6.1" Câmera Dupla 12MP',
          image:'https://images-americanas.b2w.io/produtos/01/00/img/5884146/0/5884146047_1SZ.jpg',
          price:7000,
          category_id:3
        },
      ]
    )
  }

}