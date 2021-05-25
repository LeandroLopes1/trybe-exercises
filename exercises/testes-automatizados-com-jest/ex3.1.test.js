//const { test } = require('@jest/globals')
const service = require('./ex3.1')

test('testando se a função foi chamada, qual o seu retorno e quantas vezes foi chamada',
() => {
    service.randomNumber = jest.fn().mockReturnValue(10);

    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled()
    expect(service.randomNumber).toHaveBeenCalledTimes(1)
})

