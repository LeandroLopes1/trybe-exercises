let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };

  console.log('Bem Vinda, ' + info.personagem);

  for (let key in info) {
      console.log(info[key]); 
  }

  for (let key in info) {
    console.log(key); 
}

for (let key in info) {
    console.log(info[key]); 
}

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };
  
  
  for (let keys in info, info2) {
    if (keys == info.recorrente) {
      console.log('Ambos recorrentes');;
    }
    else {
      console.log(info[keys] + ' e ' + info2[keys]);
    }
    } 
    