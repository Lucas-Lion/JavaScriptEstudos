// Arrow Function

// (a, b) => {
//     return a + b;
// }

// (a, b) => a + b;

let a = 5;
let b = 10;

let c = (num1, num2) => num1 + num2;

console.log(c(a,b));

let d = (x, y) => {
    let op;

    if(x >= 5) {
        op = x * y;
    } else {
        op = x / y;
    }

    return op;
}

console.log(d(a, b));

// um argumento
let frase = "o Lucas é um ótimo dev";

let fraseArray = (frase) => frase.split(' ');

console.log(fraseArray(frase));

// sem argumento
let semArg = () => console.log("Não tenho argumentos");

semArg();

let pessoa = {
    nome: "Lucas",
    SayName() {
        console.log(this.nome);
        console.log(this);
    }
}

pessoa.SayName();

let btn = document.getElementById('btn')
console.log(btn);

btn.addEventListener('click', function() {
    this.classList.toggle('classe');
});