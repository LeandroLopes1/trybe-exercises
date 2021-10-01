const fs = require('fs').promises;

async function addSimpsonsFamily(name) {
    try {
      const file = await fs.readFile('./exercicio4/simpsonFamily.json', 'utf-8');
      const jsonFile = JSON.parse(file);
      const newFile = {
        id: jsonFile.length + 1,
        name,
      };
      jsonFile.push(newFile)
      const stringiFyFile = JSON.stringify(jsonFile)
      fs.writeFile('./exercicio4/simpsonFamily.json', stringiFyFile);
    } catch (error) {
      console.log(error.message)
    }
  }
  


addSimpsonsFamily("Nelson Muntz");
