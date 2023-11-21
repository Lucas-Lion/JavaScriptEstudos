const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersImpares = numbers.filter(function(impares){

	return impares % 2 !== 0;

});

console.log(numbersImpares);