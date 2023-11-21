// EXERCICIO 2

const numbers = [1, 2 ,3, 4, 5];

const numbersPares = numbers.filter(function(pares){

    return pares % 2 === 0;

});

console.log(numbersPares);