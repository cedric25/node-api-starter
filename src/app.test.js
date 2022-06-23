import request from 'supertest'
import { app } from './app.js'

// --- Integration test
describe('when GET on the root path', () => {
  it('should answer with a 200', async () => {
    const response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
  })
})
