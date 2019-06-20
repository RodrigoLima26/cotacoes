const request = require('supertest');
const app = require('../app');
const User = require('../src/models/users');

beforeAll(async () => {
    await User.deleteMany();
})

test('Should call GET method successfuly', async () => {
    await request(app).get('/user/get').expect(201);
})

test('Should call POST method successfuly and create new user', async () => {
    await request(app)
          .post('/user/save')
          .send({ name: "Rod", email: 'a@hotmail.com', password: '123', age: 20 })
          .expect(200);
});