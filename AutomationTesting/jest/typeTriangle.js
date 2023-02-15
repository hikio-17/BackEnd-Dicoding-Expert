const typeTriangle = (sideA, sideB, sideC) => {
   if (sideA === sideB && sideB === sideC && sideA === sideC) {
      return 'Segitiga sama sisi';
   } 

   if (sideA === sideB || sideB === sideC || sideA === sideC) {
      return 'Segitiga sama kaki'
   }

   return 'Segitiga sembarang';
}

module.exports = typeTriangle;
