const person = {
    Firstname: 'Lucas',
    lastName: 'Valença',
    age: '22',
    hobbies: ['jogar Valorant', 'Assistir series e filmes', 'sair com Brida'],
};

// const firstName = person.Firstname;
// const lastName  = person.lastName;
// const age       = person.age;
// const hobbies   = person.hobbies;

// no lugar de criar uma variavel pra cada dado como o exemplo acima, use a seguinte sintaxe:
const { Firstname, lastName, age, hobbies} = person;

const read = person.hobbies[2];

console.log(read);

