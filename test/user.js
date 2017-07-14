// process.env.NODE_ENV = 'test';

import chai from 'chai';
import chaiHttp from 'chai-http';

import server from './../server/app';
// import User from '../app/models/book';

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
  it('it should GET all the users', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        res.should.have.status(201);
        //   res.body.should.be.a('array');
        //   res.body.length.should.be.eql(0);
        done();
      });
  });
});
