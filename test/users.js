// process.env.NODE_ENV = 'test';

import chai from 'chai';
import chaiHttp from 'chai-http';

import server from './../server/app';
import models from './../server/models';

// import User from '../app/models/book';

const should = chai.should();
const expect = chai.expect();
const user = models.user;

chai.use(chaiHttp);

// delete all records before running tests
describe('User', () => {
  beforeEach((done) => {
    user.destroy({
      where: { },
      truncate: true
    }).then( () => {
        done();
    });
  });

  describe('/POST User Sign Up Test', () => {
    it('should create a new user and return the user', (done) => {
      chai.request(server)
        .post('/api/user/signup')
        .set('Accept', 'application/json')
        .send({
          username: 'maxwell',
          email: 'maxwell@gmaiil.com',
          password: 'maxwell',
        })
      //   .expect('Content-Type', '/json/')
        .end((err, res) => {
          res.should.have.status(401);
          expect(res.body).to.have.all.deep.keys('userId', 'username', 'email');
          done();
        });
    });

    it('should create a new user and return the user', (done) => {
      chai.request(server)
        .post('/api/user/signup')
        .set('Accept', 'application/json')
        .send({
          username: 'temitope',
          email: 'temitope@yahoo.com',
          password: 'westerdae',
        })
      //      .expect('Content-Type', '/json/')
        .end((err, res) => {
          res.should.have.status(201);
          expect(res.body).to.have.all.deep.keys('userId', 'username', 'email');
          done();
        });
    });
  });
});

