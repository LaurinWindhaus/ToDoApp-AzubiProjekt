const request = require('supertest');
const app = require('../backend/index');  // Annahme: Express-App wird exportiert

describe('GET /api/todos', () => {
    it('should return a list of todos', async () => {
        const res = await request(app).get('/api/todos');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });
});
