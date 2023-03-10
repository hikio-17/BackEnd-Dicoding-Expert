const PasswordHash = require('../PasswordHash');

describe('PasswordHash Interface', () => {
   it('should throw error when invoke abstract behavior', async () => {
      // ARRANGE
      const passwordHash = new PasswordHash();

      // ACTION AND ASSERT
      await expect(passwordHash.hash('dummy_password')).rejects.toThrowError('PASSWORD_HASH.METHOD_NOT_IMPLEMENTED');
   });
});