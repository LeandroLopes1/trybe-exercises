const fs = require('fs').promises;

async function simpsonsFamily() {
    try {
      const file = await fs.readFile('./exercicio4/simpsons.json', 'utf-8');
      const jsonFile = JSON.parse(file);
      const newFile = jsonFile.filter((_, index) => index + 1 <= 4);
      const stringiFyFile = JSON.stringify(newFile)
      fs.writeFile('./exercicio4/simpsonFamily.json', stringiFyFile);
    } catch (error) {
      console.log(error.message)
    }
  }

  simpsonsFamily()