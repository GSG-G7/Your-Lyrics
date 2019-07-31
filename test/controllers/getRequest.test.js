const test = require('tape');
const supertest = require('supertest');
const app = require('../../src/app');

test('test for / route', (t) => {
  supertest(app)
    .get('/api')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) {
        t.error(err);
        t.end();
      } else {
        t.equal(res.statusCode, 200, 'Status code should return 200 - OK');
        t.end();
      }
    });
});
