'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _should = require('should');

var _should2 = _interopRequireDefault(_should);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This agent refers to PORT where program is runninng.
var server = _supertest2.default.agent('http://localhost:3000');

// UNIT test begin
describe('SAMPLE unit test', function () {
  // #1 should return home page
  it('should return home page', function (done) {
    // calling home page api
    server.get('/').expect('Content-type', /json/).expect(200) // THis is HTTP response
    .end(function (err, res) {
      // HTTP status should be 200
      res.status.should.equal(200);
      done();
    });
  });

  it('should return 404', function (done) {
    server.get('/random').expect(404).end(function (err, res) {
      res.status.should.equal(404);
      done();
    });
  });

  it('should add two number', function (done) {
    var user = { username: 'Larrystone', password: 'ababa' };
    server.post('/api/user/signin').send(user).expect('Content-type', /json/).expect(200)
    // .end((err, res) => {
    //   res.status.should.equal(200);
    //   //res.body.error.should.equal(false);
    //   res.body.username.should.equal('Larrystone');
    //   done();
    // });
    .expect(user, done);
  });
});
//# sourceMappingURL=test.js.map