const RegisterUser = require('../RegisterUser');

describe('a register user entities', () => {
   it('should throw error when payload did not countain needed property', () => {
      // ARANGE 
      const payload = {
         username: 'abc',
         password: 'abc',
      };

      // ACTION AND ASSERT
      expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY');
   });

   it('should throw error when payload did not meet data type specification', () => {
      // ARANGE 
      const payload = {
         username: 123,
         password: true,
         fullname: 'abc'
      };

      // ACTION AND ASSERT
      expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
   });

   it('should throw error when username contains restricted character', () => {
      // Arrange
      const payload = {
        username: 'dico ding',
        fullname: 'dicoding',
        password: 'abc',
      };
      // Action and Assert
      expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.USERNAME_CONTAIN_RESTRICTED_CHARACTER');
    });

   it('should throw error when payload username countain more than 50 character', () => {
      // ARANGE 
      const payload = {
         username: 'akjhfhajkhfhafhajkhfjkahjkhfjkdbjhfjkasfajkfdjkfkabgfjkabjgkfbajkbfgjkabfkbakjfbabfjabfjaakbfj',
         password: 'secret',
         fullname: 'Dicoding Indonesia',
      };

      // ACTION AND ASSERT
      expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.USERNAME_LIMIT_CHAR');
   });

   it('should create registerUser object correctly', () => {
      // ARANGE 
      const payload = {
         username: 'dicoding',
         password: 'secret',
         fullname: 'Dicoding Indonesia',
      };

      // Action 
      const { username, password, fullname } = new RegisterUser(payload);

      // ASSERT
      expect(username).toEqual(payload.username);
      expect(password).toEqual(payload.password);
      expect(fullname).toEqual(payload.fullname);
   });
});