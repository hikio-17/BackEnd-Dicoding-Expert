const createServer = require('./createServer');

describe('Hapi server', () => {
   it('should response 200 with payload value "Hello World" when GET /hello', async () => {
      // ARANGE
      const server = createServer();

      // ACTION
      const response = await server.inject({
         method: 'GET',
         url: '/hello',
      });

      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual('Hello World');
   });

   it('should response 200 with payload value "Hello John" when Get /hello/John', async () => {
      // ARANGE 
      const server = createServer();

      // ACTION 
      const response = await server.inject({
         method: 'GET',
         url: '/hello/John',
      });

      // ASSERT
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual('Hello John');
   });
});