const sum = require('./sum');

describe('sum', () => {
    test('4 mais 5 igual a 9', () => {
        expect(sum(4, 5)).toBe(9);
})

test('0 mais 0 igual a 0', () => {
    expect(sum(0, 0)).toBe(0);
})

test('lança um erro quando uma string é passada', () => {
    expect(() => {
        sum(4, '5');
    }).toThrow();    
})

test('Mensagem de erro Os "parâmetros devem ser numeros"', () => {
    expect(() => {
        sum(4, '5');
    }).toThrow(/parâmetros devem ser numeros/);
})
})
