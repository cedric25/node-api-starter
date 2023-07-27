import { expect } from 'chai'

// --- Integration test
describe('when GET on the root path', function () {
  it('should answer with a 200', async function () {
    const response = await this.app.inject({
      method: 'GET',
      url: '/',
    })
    expect(response.statusCode).to.equal(200)
  })
})
