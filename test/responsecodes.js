import chai from 'chai';
import chaiHttp from 'chai-http';

import server from './../server/app';

const should = chai.should();

chai.use(chaiHttp);
// Our parent block
// describe('User', () => { 
//     beforeEach((done) => { 
//         User.destroy({
//             where : { },
//             truncate : true
//         });
//     });

describe('/GET requests', () => {
  it('it should GET the homepage', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });

  it('it should return 404 for unknown route', (done) => {
    chai.request(server)
      .get('/api')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });

  it('it should 201 for fetching all the users /api/user/all', (done) => {
    chai.request(server)
      .get('/api/user/all')
      .end((err, res) => {
        res.should.have.status(201);
        //   res.body.should.be.a('array');
        //   res.body.length.should.be.eql(0);
        done();
      });
  });

  it('it should return 404 for unknown route /api/user/login', (done) => {
    chai.request(server)
      .get('/api/user/login')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });

  it('it should return 404 for GET request on a post route', (done) => {
    chai.request(server)
      .get('/api/user/signup')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });

  it('it should return 500 for POST request with no data  /GET /api/user/signup', (done) => {
    chai.request(server)
      .post('/api/user/signup')
      .end((err, res) => {
        res.should.have.status(500);
        done();
      });
  });

  it('it should return 401 for POST request with ' +
  'unathorized access  /POST /api/group', (done) => {
    chai.request(server)
      .post('/api/group')
      .send({ name: 'Love' })
      .end((err, res) => {
        res.should.have.status(401);
        done();
      });
  });

  it('it should return 401 for POST request with ' +
  'unathorized access  /POST /api/group/1/user', (done) => {
    chai.request(server)
      .post('/api/group/:groupId/user')
      .send({ groupId: 1 })
      .end((err, res) => {
        res.should.have.status(401);
        done();
      });
  });

  it('it should return 401 for POST request with ' +
  'unathorized access  /POST /api/group/:groupId/message', (done) => {
    chai.request(server)
      .post('/api/group/:groupId/message')
      .send({ content: 'Sample message' })
      .end((err, res) => {
        res.should.have.status(401);
        done();
      });
  });

  it('it should return 401 for POST request with ' +
  'unathorized access  /GET /api/group/:groupId/messages', (done) => {
    chai.request(server)
      .get('/api/group/:groupId/messages')
      .send({ id: 3 })
      .end((err, res) => {
        res.should.have.status(401);
        done();
      });
  });
});
