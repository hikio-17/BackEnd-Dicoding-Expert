const UserRepository = require('../UserRepository');

describe('UserRepository interface', () => {
   it('should throw error when invoke abstract behavior', async () => {
      // ARRANE
      const userRepository = new UserRepository();

      // ACTION AND ASSERT
      await expect(userRepository.addUser({})).rejects.toThrowError('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
      await expect(userRepository.verifyAvailableUsername('')).rejects.toThrowError('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
   });
});