const readline = require('readline-sync');

const PESO_KG = 70;
const ALTURA_CM = 174;

function calculaImc () {
    const peso = readline.questionFloat('Qual seu peso? (em Kg)');
    const altura = readline.questionFloat('Qual sua altura (em m)');

    console.log(`Peso: ${peso}, Altura: ${altura}`);

    const imc = (peso / Math.pow(altura, 2)).toFixed(2);

    console.log(`Seu IMC: ${imc}`);

    if(imc < 18.5 ) {
        console.log('Abaixo do peso (magreza)');
        return;
    }
    if(imc >= 18.5  && imc < 25) {
        console.log('Situação: Peso normal');
        return;
    }
    if (imc >= 25 && imc < 30) {
        console.log('Situação: Acima do peso (sobrepeso)');
        return;
      }
    
      if (imc >= 30 && imc < 35) {
        console.log('Situação: Obesidade grau I');
        return;
      }
    
      if (imc >= 35 && imc < 40) {
        console.log('Situação: Obesidade grau II');
        return;
      }
    
      console.log('Situação: Obesidade graus III e IV');
}

calculaImc();

