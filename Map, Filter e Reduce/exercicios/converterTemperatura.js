const CelsiusTemperatura = [25, 40, 30, 16];

const converterTemperatura = CelsiusTemperatura.map(function(converter){

	return (converter * 9/5) + 32;

});

console.log(converterTemperatura);