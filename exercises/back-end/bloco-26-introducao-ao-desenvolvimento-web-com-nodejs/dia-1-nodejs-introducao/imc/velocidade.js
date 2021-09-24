const readline = require('readline-sync');

function calculaVelocidadeMedia () {
    const distancia = readline.questionInt('Qual a distancia? (em m)');
    const tempo = readline.questionInt('Qual o tempo (em s)');

    const velMedia = ((distancia / tempo) * 3.6).toFixed(2);

    console.log(`velocidade media ${velMedia} Km/h`);
}

calculaVelocidadeMedia()