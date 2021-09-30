const fs = require('fs').promises;

function findId(id) {
    return fs.readFile('./exercicio4/simpsons.json', 'utf-8')
      .then((response) => JSON.parse(response))
      .then((resolve) => resolve.find((value) => value.id === id) || "id não encontrado")
    }
    
    findId('5')
    .then(resolve => console.log(resolve))
    .catch(error => console.log(error))