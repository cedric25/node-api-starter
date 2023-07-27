import { expect } from 'chai'
import { fetchUsersUseCase } from '../fetchUsers.useCase'

describe('user > fetchUsers.useCase', function () {
  describe('when calling fetchUsers', function () {
    it('should return the test user from DB', async function () {
      // --- WHEN ---
      const users = await fetchUsersUseCase()

      // --- THEN ---
      expect(users.length).to.equal(1)
      expect(users[0].email).to.equal(this.testUserEmail)
    })
  })
})
