const fs = require('fs').promises;

async function changeSimpson(change, simpsom) {
    try {
      const file = await fs.readFile('./exercicio4/simpsonFamily.json', 'utf-8');
      const jsonFile = JSON.parse(file);
      const newFile = jsonFile.map((value) => {
        if (value.name === change) {
          value.name = simpsom;
        }
        return value;
      })
      console.log(`personagem ${change} trocado por ${simpsom}`)
      const stringiFyFile = JSON.stringify(newFile)
      fs.writeFile('./exercicio4/simpsonFamily.json', stringiFyFile);
    } catch (error) {
      console.log(error.message)
    }
  }
  
  changeSimpson("Nelson Muntz", "Maggie Simpson");