const supertest = require('supertest');
const should = require('should');

// This agent refers to PORT where program is runninng.
const server = supertest.agent('http://localhost:3000');

// UNIT test begin
describe('SAMPLE unit test', () => {
  // #1 should return home page
  it('should return home page', (done) => {
    // calling home page api
    server
      .get('/')
      .expect('Content-type', /json/)
      .expect(200) // THis is HTTP response
      .end((err, res) => {
      // HTTP status should be 200
        res.status.should.equal(200);
        done();
      });
  });

  it('should return 404', (done) => {
    server
      .get('/random')
      .expect(404)
      .end((err, res) => {
        res.status.should.equal(404);
        done();
      });
  });

  it('should add two number', (done) => {
    const user = { username: 'Larrystone', password: 'ababa' };
    server
      .post('/api/user/signin')
      .send(user)
      .expect('Content-type', /json/)
      .expect(200)
      // .end((err, res) => {
      //   res.status.should.equal(200);
      //   //res.body.error.should.equal(false);
      //   res.body.username.should.equal('Larrystone');
      //   done();
      // });
      .expect(user, done);
  });
});
