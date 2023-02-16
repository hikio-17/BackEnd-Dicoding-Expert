const createServer = require('./createServer');
const MathBasic = require('./MathBasic');
const FigureCalculator = require('./FigureCalculator');

describe('A HTPP Server', () => {
   const figureCalculator = new FigureCalculator(MathBasic);

   describe('when get /add', () => {
      it('should respond with a status code of 200 and the payload value is addition result of a and b correctly', async () => {
         // ARANGE
         const a = 20;
         const b = 15;
         const spyAdd = jest.spyOn(MathBasic, 'add');
         const server = createServer({ mathBasic: MathBasic });

         // ACTION
         const response = await server.inject({
            method: 'GET',
            url: `/add/${a}/${b}`,
         });
         
         // ASSERT 
         const responseJson = JSON.parse(response.payload);

         expect(response.statusCode).toEqual(200);
         expect(responseJson.value).toEqual(35);
         expect(spyAdd).toBeCalledWith(a, b);
      });
   });

   describe('when get /substract', () => {
      it('should respond with a status code of 200 and the payload value is substraction result of a and b correctly', async () => {
         // ARANGE 
         const a = 50;
         const b = 35;
         const spySubstract = jest.spyOn(MathBasic, 'substract');
         const server = createServer({ mathBasic: MathBasic});

         // ACTION
         const response = await server.inject({
            method: 'GET',
            url: `/substract/${a}/${b}`,
         });

         // ASSERT
         const responseJson = JSON.parse(response.payload);

         expect(response.statusCode).toEqual(200);
         expect(responseJson.value).toEqual(15);
         expect(spySubstract).toBeCalledWith(a, b);
      });
   });

   describe('when get /multiply', () => {
      it('should respond with a status code of 200 and the payload value is multiply result of a and b correctly', async () => {
         // ARANGE 
         const a = 50;
         const b = 5;
         const spyMultiply = jest.spyOn(MathBasic, 'multiply');
         const server = createServer({ mathBasic: MathBasic });

         // ACTION
         const response = await server.inject({
            method: 'GET',
            url: `/multiply/${a}/${b}`,
         });

         // ASSERT
         const responseJson = JSON.parse(response.payload);

         expect(response.statusCode).toEqual(200);
         expect(responseJson.value).toEqual(250);
         expect(spyMultiply).toBeCalledWith(a, b);
      });
   });

   describe('when get /divide', () => {
      it('should respond with a status code of 200 and the payload value is divide result of a and b correctly', async () => {
         // ARANGE 
         const a = 100;
         const b = 20;
         const spyDivide = jest.spyOn(MathBasic, 'divide');
         const server = createServer({ mathBasic: MathBasic });

         // ACTION 
         const response = await server.inject({
            method: 'GET',
            url: `/divide/${a}/${b}`,
         });

         // ASSERT
         const responseJson = JSON.parse(response.payload);

         expect(response.statusCode).toEqual(200);
         expect(responseJson.value).toEqual(5);
         expect(spyDivide).toBeCalledWith(a, b);
      });
   });

   describe('when get /rectangle/perimeter', () => {
      it('should respond with a status code of 200 and the payload value is rectangle permiter result of a and b correctly', async () => {
         // ARANGE 
         const length = 5;
         const width = 5;
         const spyAdd = jest.spyOn(MathBasic, 'add');
         const spyMultiply = jest.spyOn(MathBasic, 'multiply');
         const server = createServer({ mathBasic: MathBasic, figureCalculator });
         
         // ACTION
         const response = await server.inject({
            method: 'GET',
            url: `/rectangle/perimeter/${length}/${width}`,
         });

         // ASSERT
         const responseJson = JSON.parse(response.payload);

         expect(response.statusCode).toEqual(200);
         expect(responseJson.value).toEqual(20);
         expect(spyAdd).toBeCalledWith(length, width);
         expect(spyMultiply).toBeCalledWith(2, 10);
      });
   });

   describe('when get /rectangle/area', () => {
      it('should respond with a status code of 200 and the payload value is rectangle area formula result of a and b correctly', async () => {
         // ARANGE 
         const length = 8;
         const width = 4;
         const spyMultiply = jest.spyOn(MathBasic, 'multiply');
         const server = createServer({ mathBasic: MathBasic, figureCalculator });

         // ACTION
         const response = await server.inject({
            method: 'GET',
            url: `/rectangle/area/${length}/${width}`,
         });

         // ASSERT
         const responseJson = JSON.parse(response.payload);

         expect(response.statusCode).toEqual(200);
         expect(responseJson.value).toEqual(32);
         expect(spyMultiply).toBeCalledWith(length, width);
      });
   });

   describe('when get /triangle/perimeter', () => {
      it ('should respond with a status code of 200 and the payload value is triangle perimeter formula result of a and b correctly', async () => {
         // ARANGE
         const sideA = 15;
         const sideB = 15;
         const base = 20;
         const spyAdd = jest.spyOn(MathBasic, 'add');
         const server = createServer({ mathBasic: MathBasic, figureCalculator });

         // ACTION
         const response = await server.inject({
            method: 'GET',
            url: `/triangle/perimeter/${sideA}/${sideB}/${base}`,
         });

         // ASSERT
         const responseJson = JSON.parse(response.payload);

         expect(response.statusCode).toEqual(200);
         expect(responseJson.value).toEqual(50);
         expect(spyAdd).toBeCalledWith(30, 20);
      });
   });

   describe('when get /triangle/area', () => {
      it('should respond with a status code of 200 and the payload value is triangle area formula result of length, width, and base correctly', async () => {
         // ARANGE 
         const base = 10;
         const height = 10;
         const spyMultiply = jest.spyOn(MathBasic, 'multiply');
         const spyDivide = jest.spyOn(MathBasic, 'divide');
         const server = createServer({ mathBasic: MathBasic, figureCalculator });

         // ACTION 
         const response = await server.inject({
            method: 'GET',
            url: `/triangle/area/${base}/${height}`,
         });

         // ASSERT
         const responseJson = JSON.parse(response.payload);

         expect(response.statusCode).toEqual(200);
         expect(responseJson.value).toEqual(50);
         expect(spyMultiply).toBeCalledWith(base, height);
         expect(spyDivide).toBeCalledWith(100, 2);
      });
   });

});