const typeTriangle = require('./typeTriangle');

describe('Sebuah fungsi typeTriangle', () => {
   it('harus mengembalikan nilai segitiga sama sisi', () => {
      expect(typeTriangle(2, 2, 2)).toEqual('Segitiga sama sisi');
      expect(typeTriangle(5, 5, 5)).toEqual('Segitiga sama sisi');
      expect(typeTriangle(8, 8, 8)).toEqual('Segitiga sama sisi');
   });

   it('harus mengembalikan nilai Segitiga sama kaki', () => {
      expect(typeTriangle(2, 3, 3)).toEqual('Segitiga sama kaki');
      expect(typeTriangle(5, 5, 8)).toEqual('Segitiga sama kaki');
      expect(typeTriangle(9, 3, 9)).toEqual('Segitiga sama kaki');
   });

   it('harus mengembalikan nilai Segitiga semvarang', () => {
      expect(typeTriangle(1, 2, 3)).toEqual('Segitiga sembarang');
      expect(typeTriangle(4, 9, 6)).toEqual('Segitiga sembarang');
      expect(typeTriangle(2, 5, 7)).toEqual('Segitiga sembarang');
   });
});