const request = require('supertest')
const app = require('../src/app')
const { add } = require('../src/utils')

// --- Unit test
describe('When calling add() with 2 and 2', () => {
  test('It should answer 4', async () => {
    const result = add(2, 2)
    expect(result).toBe(4)
  })
})

// --- Integration test
describe('Test the root path', () => {
  test('It should answer to the GET method', async () => {
    const response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
  })
})
