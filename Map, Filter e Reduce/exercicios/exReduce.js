const valores = [2, 3, 6, 7, 10];

const valoresSoma = valores.reduce(function(soma, accumulator){

	return soma + accumulator;

}, 0);

console.log(valoresSoma);