import { add } from './utils.js'

// --- Unit test
describe('when calling add() with 2 and 2', () => {
  it('should answer 4', async () => {
    const result = add(2, 2)
    expect(result).toBe(4)
  })
})
