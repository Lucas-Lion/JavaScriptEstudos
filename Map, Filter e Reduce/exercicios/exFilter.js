const valores = [1, 4, 7, 64, 542, 245, 10];

const valoresPares = valores.filter(function(pares){

	return pares % 2 === 0;

});

console.log(valoresPares);