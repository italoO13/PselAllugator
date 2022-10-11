import * as sinon from 'sinon';
import * as chai from 'chai';

import chaiHttp = require('chai-http');

import mock from '../mocks';
import { app } from '../../app';
import Client from '../../database/models/Client';
import crypt from '../../helper/crypt';
import Auth from '../../helper/Auth';

chai.use(chaiHttp);
const {expect} = chai;

describe('Testa a rota Session', () => {
  describe('Quando é feito um novo login', () => {
    describe('é feita com sucesso', () => {
      beforeEach(() => {
        sinon.stub(Client, 'findOne').resolves(mock.client as Client);
        sinon.stub(crypt,'comparePassword').resolves(true);
        sinon.stub(Auth.prototype, 'generateToken').resolves(mock.token);
      })
      afterEach(() => {
        sinon.restore()
      })
  
      it('deve retornar status igual a 200', async () => {
        const result = await chai.request(app).post('/session').send({email:mock.client.email, password: mock.client.password});
        expect(result.status).to.be.equal(200);
      })
  
      it('deve retornar um token válido', async () => {
        const result = await chai.request(app).post('/session').send({email:mock.client.email, password: mock.client.password});
        expect(result.body).to.deep.equal({token: mock.token});
      })
  
  
    })
    describe('retorna uma excessão', () => {
      describe('quando a estrutura enviada no body está incorreta', () => {
        beforeEach(() => {
          sinon.stub(Client, 'findOne').resolves(mock.client as Client);
          sinon.stub(crypt,'comparePassword').resolves(true);
          sinon.stub(Auth.prototype, 'generateToken').resolves(mock.token);
        })
        afterEach(() => {
          sinon.restore()
        })
        
        it('deve retornar um erro com a menssagem Non-standard email or password', async() => {
          const emailIncorret = await chai.request(app).post('/session').send({email:'emailincorreto', password: mock.client.password});
          const passwordIncorret = await chai.request(app).post('/session').send({email:mock.client.email, password:'' });
          expect(emailIncorret.body).to.deep.equal({message: 'Non-standard email or password'})
          expect(passwordIncorret.body).to.deep.equal({message: 'Non-standard email or password'})
        })

        it('deve retornar um status de 400', async() => {
          const emailIncorret = await chai.request(app).post('/session').send({email:'emailincorreto', password: mock.client.password});
          const passwordIncorret = await chai.request(app).post('/session').send({email:mock.client.email, password:'' });
          expect(emailIncorret.status).to.be.equal(400)
          expect(passwordIncorret.status).to.be.equal(400)
        })

    })
      describe('quando o password está incorreto', () => {
        beforeEach(() => {
          sinon.stub(Client, 'findOne').resolves();
          sinon.stub(crypt,'comparePassword').resolves(true);
          sinon.stub(Auth.prototype, 'generateToken').resolves(mock.token);
        })
        afterEach(() => {
          sinon.restore()
        })

        it('deve retornar um status igual a 409', async() => {
          const result = await chai.request(app).post('/session').send({email:mock.client.email, password: mock.client.password});
          expect(result.status).to.be.equal(409);
        })
        it('deve retornar a mensagem Email or password is incorrect ', async() => {
          const result = await chai.request(app).post('/session').send({email:mock.client.email, password: mock.client.password});
          expect(result.body).to.deep.equal({message: 'Email or password is incorrect'});
        })

      })

      describe('quando email está incorreto', () => {
        beforeEach(() => {
          sinon.stub(Client, 'findOne').resolves(mock.client as Client);
          sinon.stub(crypt,'comparePassword').alwaysReturned(false);
          sinon.stub(Auth.prototype, 'generateToken').resolves(mock.token);
        })
        afterEach(() => {
          sinon.restore()
        })

        it('deve retornar um status igual a 409', async() => {
          const result = await chai.request(app).post('/session').send({email:mock.client.email, password: 'senhaincorreta'});
          expect(result.status).to.be.equal(409);
        })
        it('deve retornar a mensagem Email or password is incorrect ', async() => {
          const result = await chai.request(app).post('/session').send({email:mock.client.email, password: 'senhaincorreta'});
          expect(result.body).to.deep.equal({message: 'Email or password is incorrect'});
        })

      })
    
  })

  })
})