//Exercicio 6 - Nesse exercício, você irá criar funções parecidas com código abaixo - 
//o mesmo que foi usado como exemplo sobre os testes de promise.

//Adicione uma funcionalidade para buscar pelo nome do animal - crie uma função que deverá passar no teste abaixo.


const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
  ];
  
  const findAnimalByName = (name) => (
      new Promise((resolve, reject) => {
          setTimeout(() => {
    const animal = Animals.find((animal) => animal.name === name);
    if (animal) {
        return resolve(animal);
    }
    const messageError = 'Nenhum animal com esse nome!';
    return reject(messageError); 
  }, 100);
})
);
      
  const getAnimal = (name) => {
    return findAnimalByName(name)
        .then(animal => animal);
  };
 
 
  describe('Testando promise - findAnimalByName', () => {
    describe('Quando existe o animal com o nome procurado', () => {
      test('Retorne o objeto do animal', () => {
        expect.assertions(1);
        return getAnimal('Dorminhoco').then(animal => {
          expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
        });
      });
    });
  
    describe('Quando não existe o animal com o nome procurado', () => {
      test('Retorna um erro', () => {
        expect.assertions(1);
        return getAnimal('Bob').catch(error =>
          expect(error).toEqual('Nenhum animal com esse nome!')
        );
      });
    });
  });