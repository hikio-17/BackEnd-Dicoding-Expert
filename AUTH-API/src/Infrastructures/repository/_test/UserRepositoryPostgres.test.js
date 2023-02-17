const UserTableTestHelper = require('../../../../tests/UsersTableTestHelper');
const InvariantError = require('../../../Commons/exceptions/InvariantError');
const RegisterUser = require('../../../Domains/users/entities/RegisterUser')
const RegisteredUser = require('../../../Domains/users/entities/RegiteredUser');
const pool = require('../../database/postgres/pool');
const UserRepositoryPostgres = require('../UserRepositoryPostgres');

describe('UserRepositoryPostgres', () => {
   afterEach(async () => {
      await UserTableTestHelper.cleanTable();
   });

   afterAll(async () => {
      await pool.end();
   });

   describe('verifyAvailableUsername function', () => {
      it('should throw InvariantError when username not available', async () => {
         // ARRANGE 
         await UserTableTestHelper.addUser({ username: 'dicoding'});
         const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});

         // ACTION AND ASSERT
         await expect(userRepositoryPostgres.verifyAvailableUsername('dicoding')).rejects.toThrowError(InvariantError);
      });

      it('should not throw InvariantError when username available', async () => {
         // ARRANGE
         const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});

         // ACTION AND ASSERT
         await expect(userRepositoryPostgres.verifyAvailableUsername('dicoding')).resolves.not.toThrowError(InvariantError);
      });
   });

   describe('addUser function', () => {
      it('should persist register user', async () => {
         // ARRANGE
         const registerUser = new RegisterUser({
            username: 'dicoding',
            password: 'secret',
            fullname: 'Dicoding Indonesia',
         });
         const fakeIdGenerator = () => '123';
         const userRepositoryPostgres = new UserRepositoryPostgres(pool, fakeIdGenerator);

         // ACTION
         await userRepositoryPostgres.addUser(registerUser);

         // ASSERT
         const users = await UserTableTestHelper.findUserById('user-123');
         expect(users).toHaveLength(1);
      });

      it('should return registered user correctly', async () => {
         // ARRANGE
         const registerUser = new RegisterUser({
            username: 'dicoding',
            password: 'secret',
            fullname: 'Dicoding Indonesia',
         });
         const fakeIdGenerator = () => '123'; //stub
         const userRepositoryPostgres = new UserRepositoryPostgres(pool, fakeIdGenerator);

         // ACTION
         const registeredUser = await userRepositoryPostgres.addUser(registerUser);

         // ASSERT
         expect(registeredUser).toStrictEqual(new RegisteredUser({
            id: 'user-123',
            username: 'dicoding',
            fullname: 'Dicoding Indonesia'
         }));
      });
   });
});