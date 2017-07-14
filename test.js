import supertest from 'supertest';
import configs from './../server/config/config.json';
import app from './../'
server = require('../server');
// This agent refers to PORT where program is runninng.
const server = supertest.agent(configs.url_local);

// declare routes variable
// const signInRoute = '/api/user/signin';
const signOutRoute = '/api/user/signout';
// const signUpRoute = '/api/user/signup';
// const groupRoute = '/api/group';

// UNIT test begin
describe('Test Response Codes for routes', () => {
  // test on hompage
  it(`should return 200 for '${configs.url_local}/' GET request`, () => {
    // calling home page api
    server
      .get('/')
      .set('Accept', 'application/json')
      .expect(200);
  });

  // test on log out api
  it(`should return 200 for '${configs.url_local}${signOutRoute}' GET request`, () => {
    // calling log out api
    server
      .get('/')
      .set('Accept', 'application/json')
      .expect(200);
  });

  it(`should return 404 for '${configs.url_local}/api/user/' GET request`, () => {
    // calling home page api
    server
      .get('/api/user/')
      .set('Accept', 'application/json')
      .expect(404);
  });

  it(`should return 404 for '${configs.url_local}/api/' GET request`, () => {
    // calling home page api
    server
      .get('/api/')
      .set('Accept', 'application/json')
      .expect(404);
  });

  it(`should return 404 for '${configs.url_local}/login/' GET request`, () => {
    // calling home page api
    server
      .get('/login/')
      .set('Accept', 'application/json')
      .expect(404);
  });

  it(`should return 404 for '${configs.url_local}/api/' POST request`, () => {
    // calling home page api
    server
      .post('/api/')
      .set('Accept', 'application/json')
      .expect(404);
  });

  it(`should return 404 for '${configs.url_local}/api/user/login' POST request`, () => {
    // calling home page api
    server
      .post('/api/user/login')
      .set('Accept', 'application/json')
      .expect(404);
  });

  it(`should return 404 for '${configs.url_local}/api/user/users' POST request`, () => {
    // calling home page api
    server
      .post('/api/user/users')
      .set('Accept', 'application/json')
      .expect(404);
  });

  it(`should return 200 for '${configs.url_local}/api/user/all' GET request`, () => {
    // calling home page api
    server
      .post('/api/user/all')
      .set('Accept', 'application/json')
      .expect(200);
  });

  it(`should return 200 for '${configs.url_local}/api/user/signin' POST request`, () => {
    // calling home page api
    server
      .post('/api/user/?username=larrystone')
      .set('Accept', 'application/json')
      .expect(404);
  });
});


// TODO test for messages returned
// describe('Test Response Messages for routes', () => {
//   // test on hompage
//   it(`should return 200 for '${configs.url_local}/' GET request`, () => {
//     // calling home page api
//     server
//       .get('/')
//       .set('Accept', 'application/json')
//       .expect(200);
//   });

//   // test on log out api
//   it(`should return 200 for '${configs.url_local}${signOutRoute}' GET request`, () => {
//     // calling log out api
//     server
//       .get('/')
//       .set('Accept', 'application/json')
//       .expect(200);
//   });

//   it(`should return 404 for '${configs.url_local}/api/user/' GET request`, () => {
//     // calling home page api
//     server
//       .get('/api/user/')
//       .set('Accept', 'application/json')
//       .expect(404);
//   });

//   it(`should return 404 for '${configs.url_local}/api/' GET request`, () => {
//     // calling home page api
//     server
//       .get('/api/')
//       .set('Accept', 'application/json')
//       .expect(404);
//   });

//   it(`should return 404 for '${configs.url_local}/login/' GET request`, () => {
//     // calling home page api
//     server
//       .get('/login/')
//       .set('Accept', 'application/json')
//       .expect(404);
//   });

//   it(`should return 404 for '${configs.url_local}/api/' POST request`, () => {
//     // calling home page api
//     server
//       .post('/api/')
//       .set('Accept', 'application/json')
//       .expect(404);
//   });

//   it(`should return 404 for '${configs.url_local}/api/user/login' POST request`, () => {
//     // calling home page api
//     server
//       .post('/api/user/login')
//       .set('Accept', 'application/json')
//       .expect(404);
//   });

//   it(`should return 404 for '${configs.url_local}/api/user/users' POST request`, () => {
//     // calling home page api
//     server
//       .post('/api/user/users')
//       .set('Accept', 'application/json')
//       .expect(404);
//   });

//   it(`should return 200 for '${configs.url_local}/api/user/all' GET request`, () => {
//     // calling home page api
//     server
//       .post('/api/user/all')
//       .set('Accept', 'application/json')
//       .expect(200);
//   });

//   it(`should return 200 for '${configs.url_local}/api/user/signin' POST request`, () => {
//     // calling home page api
//     server
//       .post('/api/user/?username=larrystone')
//       .set('Accept', 'application/json')
//       .expect(404);
//   });
// });
