function verificaPalidromo(string){
    for(let index = 0; index < string.length / 2; index += 1 ){
        if(string[index] != string[string.length - index - 1] )
        return false; return true

    }
}
console.log(verificaPalidromo('arara'));
console.log(verificaPalidromo('desenvolvimento'));
console.log(verificaPalidromo('radar'));const texto = "Temos uma string aqui";

const texto = "Temos uma string aqui";
const array = texto.split(" ");

console.log(array); // ["Temos", "uma", "string", "aqui"]; 