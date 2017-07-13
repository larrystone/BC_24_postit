process.env.NODE_ENV = 'test';

import chai from 'chai';
import chaiHttp from 'chai-http';

import server from './../server/app';

// let mongoose = require("mongoose");
// let Book = require('../app/models/book');

// Require the dev-dependencies
// let server = require('../server');

let should = chai.should();

chai.use(chaiHttp);
// Our parent block
describe('Books', () => {
  // beforeEach((done) => { //Before each test we empty the database
  //     Book.remove({}, (err) => { 
  //        done();         
  //     });     
  // });
/*
  * Test the /GET route
  */
  describe('/GET requests', () => {
    it('it should GET all the books', (done) => {
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
});
