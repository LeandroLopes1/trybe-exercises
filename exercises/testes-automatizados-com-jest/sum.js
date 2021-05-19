// sum.js
const sum = (a, b) => {
    if (typeof (a) !== 'number' || typeof (b) !== 'number') {
      throw new Error('parâmetros devem ser numeros');
    };
    return a + b;
  };
  
  module.exports = sum;