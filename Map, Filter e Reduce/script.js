// MAP
// O método map rodará uma função em cada elemento do array, e retornará um novo array com novos valores.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// FILTER
// O método filter é um filtro que terá como saída apenas os valores que passarem por um determinado teste.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// REDUCE
// O método reduce é um redutor de valores de um array, onde terá como saída apenas um valor.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce


const numbers = [1, 2, 3, 4, 5];

const numbersMultipliedByTwo = numbers.map(function(number) {
    return number * 2;
})

const ages = [8, 12, 16, 24, 32, 40];

//const evenAges = ages.filter((function(age) {
//  return age % 2 == 0
//}));

const SumOfAges = ages.reduce(function (age, accumulator) {
    return accumulator + age;
}, 0);

console.log(SumOfAges);