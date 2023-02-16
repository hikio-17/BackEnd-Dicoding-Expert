const RegisteredUser = require('../RegiteredUser');

describe('a RegisteredUser entities', () => {
   it('should throw error when payload did not countain needed property', () => {
      // ARANGE 
      const payload = {
         username: 'dicoding',
         fullname: 'Dicoding Indonesia',
      };

      // ACTION AND ASSERT
      expect(() => new RegisteredUser(payload)).toThrowError('REGISTERED_USER.NOT_CONTAIN_NEEDED_PROPERTY');
   });

   it('should throw error when payload did not meet data type specification', () => {
      // ARANGE 
      const payload = {
         id: 123,
         username: 'dicoding',
         fullname: 'Dicoding Indonesia',
      };

      // ACTION AND ASSERT
      expect(() => new RegisteredUser(payload)).toThrowError('REGISTERED_USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
   });

   it('should create registeredUser object correctly', () => {
      // ARANGE 
      const payload = {
         id: 'user-123',
         username: 'dicoding',
         fullname: 'Dicoding Indonesia',
      };

      // ACTION
      const registeredUser = new RegisteredUser(payload);

      // ASSERT
      expect(registeredUser.id).toEqual(payload.id);
      expect(registeredUser.username).toEqual(payload.username);
      expect(registeredUser.fullname).toEqual(payload.fullname);
   });
});