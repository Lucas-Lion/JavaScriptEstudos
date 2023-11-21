// EXERCICIO 3

const numbers = [1, 2, 3, 5, 6];

const numbersCalculator = numbers.reduce(function(soma, accumulator){

    return soma + accumulator;

}, 0);

console.log(numbersCalculator);