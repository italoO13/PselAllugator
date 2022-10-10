import * as sinon from 'sinon';
import * as chai from 'chai';

import chaiHttp = require('chai-http');

import mock from '../mocks';
import { app } from '../../app';
import Client from '../../database/models/Client';
chai.use(chaiHttp);
const {expect} = chai;

describe('Testa a rota Clients', () => {
  describe('Ao criar um novo usuário a partir o metodo POST', () => {
    describe('quando é feito uma requisição com sucesso', () => {
      beforeEach(() => {
        sinon.stub(Client, 'findOne').resolves();
        sinon.stub(Client, 'create').resolves();
      })
      afterEach(() => {
        sinon.restore()
      })
      it('Deve retornar um status 201', async() => {
        const result = await chai.request(app).post('/clients').send(mock.client);
        expect(result.status).to.be.equal(201);
      })
      it('deve retornar a mensagem: created', async() => {
        const result = await chai.request(app).post('/clients').send(mock.client);
        expect(result.body).to.deep.equal({message: 'created'})

      })

    })
    describe('Deve retornar uma excessão', () => {
      describe('quando o cpf ou email existe', () => {
        beforeEach(() => {
          sinon.stub(Client, 'findOne').resolves(mock.client as Client);
          sinon.stub(Client, 'create').resolves();
        })
        afterEach(() => {
          sinon.restore()
        })
        it('Deve retornar um status 409', async() => {
          const result = await chai.request(app).post('/clients').send(mock.client);
          expect(result.status).to.be.equal(409);
        })
        it('deve retornar uma excessão com a menssagem : User or cpf already registered ', async() => {
          const result = await chai.request(app).post('/clients').send(mock.client);
          expect(result.body).to.deep.equal({message: 'User or cpf already registered'})
        })

      })

    })

  })

})