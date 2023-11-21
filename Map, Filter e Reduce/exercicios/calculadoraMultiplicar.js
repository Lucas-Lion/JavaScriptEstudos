const numbers = [2, 5, 6, 7];

const numbersMultiplicar = numbers.reduce(function(multiplicar, accumulator){

	return multiplicar * accumulator;

}, 1);

console.log(numbersMultiplicar);