let nomepeça = 'Rainha'
let nomeLowerCase = nomepeça.toLocaleLowerCase()

switch (nomeLowerCase){
    case 'peão':
        console.log('Apenas uma casa vertical');
      break;
    case 'rainha':
        console.log('Horizontal, vertical e Diagonais');
      break;

    case 'torre':
        console.log('Vertical e horizontal');
      break;
      default:
      console.log('Digite uma peça do jogo');    
}