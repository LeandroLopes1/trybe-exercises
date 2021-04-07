let numbers = [5, 9, 3, 1, 70, 8, 100, 2, 0.8, 27];
let menorNumero = Infinity

for (let index = 0; index < numbers.length; index +=1){
    if(numbers[index] < menorNumero){
        menorNumero = numbers[index]
    }
}
console.log(menorNumero);
