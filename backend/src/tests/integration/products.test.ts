import * as sinon from 'sinon';
import * as chai from 'chai';

import chaiHttp = require('chai-http');

import mock from '../mocks';
import { app } from '../../app';
import Product from '../../database/models/Product'
chai.use(chaiHttp);
const {expect} = chai;

describe('Testa a rota Products', () => {
  describe('Quando é solicitado todos os produtos disponíveis pela rota GET', () => {
    beforeEach(() => {
      sinon.stub(Product, 'findAll').resolves(mock.products as unknown as Product[]);
    })
    afterEach(() => {
      sinon.restore()
    })

    it('deve retornar status igual a 200', async () => {
      const result = await chai.request(app).get('/products');
      expect(result.status).to.be.equal(200);
    })

    it('deve retornar um array de objetos semelhante ao mock.products', async () => {
      const result = await chai.request(app).get('/products');
      expect(result.body).to.deep.equal(mock.productsAdapted);
    })


  })
  describe('Quando é pesquisado um produto por nome através rota GET', () => {
    beforeEach(() => {
      sinon.stub(Product, 'findAll').resolves(mock.products as unknown as Product[]);
    })
    afterEach(() => {
      sinon.restore()
    })

    it('deve retornar status igual a 200', async () => {
      const result = await chai.request(app).get('/products/search?name=Smartphone');
      expect(result.status).to.be.equal(200);
    })

    it('deve retornar um array de objetos semelhante ao mock.products', async () => {
      const result = await chai.request(app).get('/products/search?name=Smartphone');
      expect(result.body).to.deep.equal(mock.productsAdapted);
    })


  })

})