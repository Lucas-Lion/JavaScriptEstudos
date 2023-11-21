let index = 0;

while (index < 10) {
    console.log('index é menor do que 10');
    index = index + 1;
    // index += 1   ou   index++ 
};

const person = {
    name: "Lucas",
    age: 22,
}

for (property in person) {
    console.log(person[property])
}