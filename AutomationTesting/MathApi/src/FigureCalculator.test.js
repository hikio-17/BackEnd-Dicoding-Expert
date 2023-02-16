const FigureCalculator = require('./FigureCalculator');
const MathBasic = require('./MathBasic');

describe('A Figure Calculator', () => {
   it('should contain calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, and calculateTriangleArea functions', () => {
      const figureCalculator = new FigureCalculator({});

      expect(figureCalculator).toHaveProperty('calculateRectanglePerimeter');
      expect(figureCalculator).toHaveProperty('calculateRectangleArea');
      expect(figureCalculator).toHaveProperty('calculateTrianglePerimeter');
      expect(figureCalculator).toHaveProperty('calculateTriangleArea');
      expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(Function);
      expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function);
      expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(Function);
      expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function);
   });
});

describe('A calculateRectanglePerimeter function', () => {
   it('should throw error whent not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({});
      
      expect(() => figureCalculator.calculateRectanglePerimeter()).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter(1)).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter(1, 2, 3)).toThrowError();
   });
   
   it('should throw error when given non-number parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateRectanglePerimeter('5', 2)).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter(true, {})).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter(false, null)).toThrowError();
   });

   it('should return correct value based on rectangle perimeter formula', () => {
      // Arange
      const length = 20;
      const width = 10;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const figureCalcultaor = new FigureCalculator(MathBasic);

      // Action
      const result = figureCalcultaor.calculateRectanglePerimeter(length, width);

      // Assert
      expect(result).toEqual(60); // 2 * (10 + 20)
      expect(spyAdd).toHaveBeenCalledWith(length, width); // 10 + 20
      expect(spyMultiply).toHaveBeenCalledWith(2, 30)
   });
});

describe('A calculateRectangleArea function', () => {
   it('should countains throw error when given not 2 parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateRectangleArea()).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(1)).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(1, 2, 3)).toThrowError();
   });

   it('should countains throw error when given non-number parameter', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateRectangleArea('1', null)).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea({}, [])).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(false, true)).toThrowError();
   });

   it('should return correct value based on perimeter triangle formula', () => {
      // Assert
      const length = 20;
      const width = 10;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const figureCalculator = new FigureCalculator(MathBasic);

      // Action
      const result = figureCalculator.calculateRectangleArea(length, width);

      // Assert
      expect(result).toEqual(200);
      expect(spyMultiply).toHaveBeenCalledWith(length, width);
   });
});

describe('A calculateTrianglePerimeter function', () => {
   it('should countains throw error when given not 3 parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateTrianglePerimeter()).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(1)).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(1, 2)).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(1, 2, 3, 4)).toThrowError();
   });

   it('should countains throw error when given non-number parameter', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateTrianglePerimeter('1', [], {})).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(null, false, {})).toThrowError();
   });

   it('should countains return correct value based on area triangle formula', () => {
      // ASSERT
      const sideA = 10;
      const sideB = 15;
      const base = 5;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const figureCalculator = new FigureCalculator(MathBasic);

      // ACTION
      const result = figureCalculator.calculateTrianglePerimeter(sideA, sideB, base);

      // ASSERT
      expect(result).toEqual(30);
      expect(spyAdd).toHaveBeenCalledWith((sideA + sideB), base);
   });
});

describe('A calculate triangle area function', () => {
   it('shoulds countain throw error when given not 2 parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateTriangleArea()).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea(1)).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea(1, 2, 3)).toThrowError();
   });

   it('shoulds countain throw error when given non-number parameters', () => {
      const figureCalcultaor = new FigureCalculator({});

      expect(() => figureCalcultaor.calculateTriangleArea('1', {})).toThrowError();
      expect(() => figureCalcultaor.calculateTriangleArea([], {})).toThrowError();
      expect(() => figureCalcultaor.calculateTriangleArea(null, false)).toThrowError();
   });

   it('shoulds return correct value based on triangle area formula', () => {
      // ARANGE
      const base = 20;
      const height = 10;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const spyDivide = jest.spyOn(MathBasic, 'divide');
      const figureCalculator = new FigureCalculator(MathBasic);

      // Action
      const result = figureCalculator.calculateTriangleArea(base, height);

      // ASSERT
      expect(result).toEqual(100);
      expect(spyMultiply).toHaveBeenCalledWith(base, height);
      expect(spyDivide).toHaveBeenCalledWith(200, 2);
   });
});
