
const factorial = number => {
    let result = 1

    for (let index = 2; index <= number; index += 1) {
        result *= index
    }

    return result
}

console.log(factorial(5))


function fatorial(n) {
    let resultado = n === 0 ? 1 : n * fatorial(n-1);
    return resultado
}

console.log(fatorial(5));


const factorial = number => number > 1 ? number * factorial(number - 1) : 1
console.log(factorial(5))