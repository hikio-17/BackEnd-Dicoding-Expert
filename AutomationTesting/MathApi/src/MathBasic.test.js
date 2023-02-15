const MathBasic = require('./MathBasic');

describe('A Math Basic', () => {
   it('should countains add, subtract, multiply, and divide function', () => {
      expect(MathBasic).toHaveProperty('add');
      expect(MathBasic).toHaveProperty('substract');
      expect(MathBasic).toHaveProperty('multiply');
      expect(MathBasic).toHaveProperty('divide');
      expect(MathBasic.add).toBeInstanceOf(Function);
      expect(MathBasic.substract).toBeInstanceOf(Function);
      expect(MathBasic.multiply).toBeInstanceOf(Function);
      expect(MathBasic.divide).toBeInstanceOf(Function);
   });
});

describe('A add function', () => {
   it('should throw error whent not given 2 parameters', () => {
      expect(() => MathBasic.add()).toThrowError();
      expect(() => MathBasic.add(1)).toThrowError();
      expect(() => MathBasic.add(1, 2, 3)).toThrowError();
      expect(() => MathBasic.add(1, 2, 3, 4)).toThrowError();
   });

   it('should throw error when given non-numbers parameters', () => {
      expect(() => MathBasic.add('1', '2')).toThrowError();
      expect(() => MathBasic.add(true, {})).toThrowError();
      expect(() => MathBasic.add(null, false)).toThrowError();
   });

   it('should return a + b when given two number parameters', () => {
      expect(MathBasic.add(2, 2)).toEqual(4);
      expect(MathBasic.add(16, 8)).toEqual(24);
      expect(MathBasic.add(7, 3)).toEqual(10);
   });
});

describe('A substract function', () => {
   it('should throw error when given not 2 parameters', () => {
      expect(() => MathBasic.substract()).toThrowError();
      expect(() => MathBasic.substract(1)).toThrowError();
      expect(() => MathBasic.substract(1, 2, 3)).toThrowError();
      expect(() => MathBasic.substract(1, 2, 3, 4)).toThrowError();
   });

   it('should throw error when given non-numbers parameters', () => {
      expect(() => MathBasic.substract('1', 1)).toThrowError();
      expect(() => MathBasic.substract(true, {})).toThrowError();
      expect(() => MathBasic.substract(null, false)).toThrowError();
   });

   it('should return a - b when given two number parameter', () => {
      expect(MathBasic.substract(5, 3)).toEqual(2);
      expect(MathBasic.substract(10, 5)).toEqual(5);
      expect(MathBasic.substract(6, 3)).toEqual(3);
   });
});

describe('A multiply function', () => {
   it('should throw error when given not 2 parameters', () => {
      expect(() => MathBasic.multiply()).toThrowError();
      expect(() => MathBasic.multiply(1)).toThrowError();
      expect(() => MathBasic.multiply(1, 2, 3)).toThrowError();
      expect(() => MathBasic.multiply(1, 2, 3, 4)).toThrowError();
   });

   it('should throw error when given not-number parameters', () => {
      expect(() => MathBasic.multiply(1, '1')).toThrowError();
      expect(() => MathBasic.multiply(true, {})).toThrowError();
      expect(() => MathBasic.multiply(false, null)).toThrowError();
   });

   it('should return a * b when given two number parameters', () => {
      expect(MathBasic.multiply(2, 2)).toEqual(4);
      expect(MathBasic.multiply(8, 4)).toEqual(32);
      expect(MathBasic.multiply(7, 3)).toEqual(21);
   });
});

describe('A divide function', () => {
   it('should throw error when given not 2 parameters', () => {
      expect(() => MathBasic.divide()).toThrowError();
      expect(() => MathBasic.divide(1)).toThrowError();
      expect(() => MathBasic.divide(1, 2, 3)).toThrowError();
      expect(() => MathBasic.divide(1, 2, 3, 4)).toThrowError();
   });

   it('should throw error when given non-number parameters', () => {
      expect(() => MathBasic.divide(5, '5')).toThrowError();
      expect(() => MathBasic.divide(true, {})).toThrowError();
      expect(() => MathBasic.divide(null, false)).toThrowError();
   });

   it('should return a / b value when give two number parameters', () => {
      expect(MathBasic.divide(5, 5)).toEqual(1);
      expect(MathBasic.divide(27, 9)).toEqual(3);
      expect(MathBasic.divide(8, 2)).toEqual(4);
   });
});