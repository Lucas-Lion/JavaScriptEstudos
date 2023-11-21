const numbers = [1, 2, 3, 4, 5];

const numbersMultipliedByTwo = numbers.map(function(number) {
    return number * 2;
});

const ages = [32, 15, 19, 12];

const evenAges = ages.filter(function(age){
    return age % 2 === 0;
});

console.log(evenAges);