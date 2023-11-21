const ages = [32, 15, 19, 12];

const sumOfAges = ages.reduce(function(age, accumulator) {

	return accumulator + age;

}, 0);

console.log(sumOfAges);