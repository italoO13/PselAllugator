import * as sinon from 'sinon';
import * as chai from 'chai';

import chaiHttp = require('chai-http');

import mock from '../mocks';
import { app } from '../../app';
import Subscription from '../../database/models/Subscription';
import Auth from '../../helper/Auth';
chai.use(chaiHttp);
const {expect} = chai;

describe('Testa a rota Subscription', () => {
  describe('Ao soliticitar todas as subscriptions de um client via metodo GET', () => {
    describe('quando é feito uma requisição com sucesso', () => {
      beforeEach(() => {
        sinon.stub(Subscription, 'findAll').resolves(mock.subscriptionClient as unknown as Subscription[]);
        sinon.stub(Auth.prototype, 'decodeToken').resolves({
          id:1,
        })
      
      })
      afterEach(() => {
        sinon.restore()
      })
      it('Deve retornar um status 200', async() => {
        const result = await chai.request(app).get('/subscription').set('authorization', mock.token);
        expect(result.status).to.be.equal(200);
      })
      it('deve retornar um objeto semelhante ao mock.subscriptionClient', async() => {
        const result = await chai.request(app).get('/subscription').set('authorization', mock.token);
        expect(result.body).to.deep.equal(mock.subscriptionClient)

      })

    })
    describe('quando token', () => {
      describe('não é passado', () => {
        beforeEach(() => {
          sinon.stub(Subscription, 'findAll').resolves(mock.subscriptionClient as unknown as Subscription[]);
          sinon.stub(Auth.prototype, 'decodeToken').resolves({
            id:1,
          })
        
        })
        afterEach(() => {
          sinon.restore()
        })
        it('Deve retornar um erro com status 400', async() => {
          const result = await chai.request(app).get('/subscription').set('authorization', '');
          expect(result.status).to.be.equal(400);
        })
        it('deve retornar a mensagem Token not informed', async() => {
          const result = await chai.request(app).get('/subscription').set('authorization', '');
          expect(result.body).to.deep.equal({message: 'Token not informed'})
  
        })
    })


    })

    })

  })
