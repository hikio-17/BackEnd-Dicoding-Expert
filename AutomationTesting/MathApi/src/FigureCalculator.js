class FigureCalculator {
   constructor(mathBasic) {
      this.mathBasic = mathBasic;
   }

   _verifyArgs(args, expectedArgCount) {
      if (args.length !== expectedArgCount) {
         throw new Error(`fungsi hanya menerima ${expectedArgCount} parameter`);
      }

      args.forEach((arg) => {
         if (typeof arg !== 'number') {
            throw new Error('fungsi hanya menerima parameter angka');
         }
      });

      return args;
   }

   calculateRectanglePerimeter(...args) {
      const [ length, width ] = this._verifyArgs(args, 2);

      return this.mathBasic.multiply(2, this.mathBasic.add(length, width));
   }

   calculateRectangleArea(...args) {
      const [ length, width ] = this._verifyArgs(args, 2);

      return this.mathBasic.multiply(length, width);
   }

   calculateTrianglePerimeter(...args) {
      const [ sideA, sideB, base ] = this._verifyArgs(args, 3);

      return this.mathBasic.add(this.mathBasic.add(sideA, sideB), base);
   }

   calculateTriangleArea(...args) {
      const [ base, height ] = this._verifyArgs(args, 2);

      return this.mathBasic.divide(this.mathBasic.multiply(base, height), 2);
   }
};

module.exports = FigureCalculator;
